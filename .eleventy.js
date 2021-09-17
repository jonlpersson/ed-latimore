const now = String(Date.now());
const htmlmin = require('html-minifier');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItResponsive = require("@gerhobbelt/markdown-it-responsive");
const sharp = require('sharp');
const pluginCloudCannon = require('eleventy-plugin-cloudcannon');

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false)

    eleventyConfig.addWatchTarget('./_tmp/style.css')
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

    eleventyConfig.addShortcode('version', function () {
        return now
    })

    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
    });

    eleventyConfig.addFilter("markdownify", require("./lib/filters/markdownify.js"));
    eleventyConfig.addFilter("include", require("./lib/filters/include.js"));
    eleventyConfig.addFilter("exclude", require("./lib/filters/exclude.js"));
    eleventyConfig.addFilter("smartquotes", (post) => {
        const hawaii = new RegExp(/(?<=<(h|l|p[^r]).*)Hawai'i/g);
        const slang = new RegExp(/'(cause|em|til|twas)/g);
        const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
        const years = new RegExp(/(?<=\s)'(?=\d)/g);
        const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)"/g);
        const closeDoubles = new RegExp(/(?<=<(h|l|p[^r]).*“.*)"(?=(\s|\p{P}|<))/gu);
        const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
        const closeSingles = new RegExp(/(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu);
        return post
            .replace(hawaii, "Hawaiʻi").replace(slang, "’$1")
            .replace(apostrophes, "’").replace(years, "’")
            .replace(openDoubles, "“").replace(closeDoubles, "”")
            .replace(openSingles, "‘").replace(closeSingles, "’");
    });

    eleventyConfig.addLiquidShortcode("image", require('./lib/shortcodes/image.shortcode.js'));
    eleventyConfig.addLiquidShortcode("background", require('./lib/shortcodes/background.shortcode.js'));
    eleventyConfig.addLiquidShortcode("youtube", require('./lib/shortcodes/youtube.shortcode.js'));

    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (
            process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith('.html')
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified
        }

        return content
    })

    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
    })

    // Configure collections
    eleventyConfig.addCollection("posts", require("./lib/collections/posts.js"));
    eleventyConfig.addCollection("tagList", require("./lib/collections/tagList.js"));
    eleventyConfig.addCollection("paginatedPosts", require("./lib/collections/paginatedPosts.js"));
    eleventyConfig.addCollection("paginatedPostsByTag", require("./lib/collections/paginatedPostsByTag.js"));

    // Add header anchor and footnotes plugin to Markdown renderer
    const markdownLib = markdownIt({ html: true, typographer: true, linkify: true, breaks: true });
    markdownLib.use(markdownItFootnote).use(markdownItAnchor);
    eleventyConfig.setLibrary("md", markdownLib);

    const config = {
        markdownTemplateEngine: "liquid",
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        }
    };

    eleventyConfig.addPlugin(pluginCloudCannon, config);
    return config;
};