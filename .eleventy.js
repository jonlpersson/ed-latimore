const now = String(Date.now());
const htmlmin = require('html-minifier');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false)

    eleventyConfig.addWatchTarget('./_tmp/style.css')
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

    eleventyConfig.addShortcode('version', function () {
        return now
    })

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

    // Add header anchor and footnotes plugin to Markdown renderer
    const markdownLib = markdownIt({ html: true, typographer: true });
    markdownLib.use(markdownItFootnote).use(markdownItAnchor);
    eleventyConfig.setLibrary("md", markdownLib);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site",
        }
    }
};