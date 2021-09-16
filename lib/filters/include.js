const lodash = require("lodash");

module.exports = function (arr, path, value) {
  value = lodash.deburr(value).toLowerCase();
  return arr.filter((item) => {
    let pathValue = lodash.get(item, path);
    pathValue = lodash.deburr(pathValue).toLowerCase();
    return pathValue.includes(value);
  });
};