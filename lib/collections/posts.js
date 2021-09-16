/* Generate "Posts" collection based on folder structure */
module.exports = function(collection) {
  return collection.getFilteredByGlob("src/posts/*.md").reverse();
};