const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownLib = markdownIt({ html: true, typographer: true, linkify: true, breaks: true });
markdownLib.use(markdownItFootnote).use(markdownItAnchor);

module.exports = function (value) {
    return markdownLib.render(value);
};