const siteData = require('../../src/_data/project');

module.exports = function(collection) {
  const allPosts = require('./posts')(collection);

  const maxPostsPerPage = siteData.paginationLimit;
  const numberOfPages = Math.ceil(allPosts.length / maxPostsPerPage);
  const paginatedPosts = [];

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * maxPostsPerPage;
    const sliceTo = sliceFrom + maxPostsPerPage;

    paginatedPosts.push({
      number: pageNum,
      posts: allPosts.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages
    });
  }

  return paginatedPosts;
};
