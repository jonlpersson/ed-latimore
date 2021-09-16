module.exports = function (value) {
    let markdownify = require('markdown-it')({
        html: true
    });
    return markdownify.render(value);
};