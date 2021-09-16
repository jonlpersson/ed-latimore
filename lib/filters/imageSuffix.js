module.exports = function (imgStr, suffix) {
    const i = imgStr.lastIndexOf('.');
    const imgPath = imgStr.substring(0, i);
    const ext = imgStr.substring(i + 1);
    return `${imgPath}-${suffix}.${ext}`;
};