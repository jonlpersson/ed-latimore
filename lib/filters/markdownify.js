module.exports = function (value) {
    let markdownify = require('markdown-it')({
        html: true,
        typographer: true,
        linkify: true
    });
    return markdownify.render(value);
};