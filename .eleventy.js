const now = String(Date.now());
const htmlmin = require('html-minifier');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItResponsive = require("@gerhobbelt/markdown-it-responsive");
const sharp = require('sharp');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

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

    eleventyConfig.addFilter("include", require("./filters/include.js"));
    eleventyConfig.addFilter("exclude", require("./filters/exclude.js"));
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

    // Create a "Posts" collection based on folder structure
    eleventyConfig.addCollection("posts", function(collection){
        return collection.getFilteredByGlob("src/posts/*.md").reverse();
    });

    // Create a list of tags/categories
    eleventyConfig.addCollection("categories", require("./filters/getTagList.js"));

    // Add header anchor and footnotes plugin to Markdown renderer
    const markdownLib = markdownIt({ html: true, typographer: true });
    const rwdOptions = {
        responsive: {
            'srcset': {
                '*': [ {
                width: 320,
                rename: {
                    suffix: '-320'
                }
                }, {
                width: 550,
                rename: {
                    suffix: '-550'
                }
                } ]
            },
            'sizes': {
                '*': '(max-width: 550px) calc(100vw - 120px), 550px'
            }
        }
    };
    markdownLib.use(markdownItFootnote).use(markdownItAnchor);
    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addPlugin(lazyImagesPlugin, {
        setWidthAndHeightAttrs: true,
        preferNativeLazyLoad: true,
        transformImgPath: (imgPath) => imgPath.replace('/assets/', './_site/assets/')
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        }
    }
};