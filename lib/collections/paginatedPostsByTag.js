const siteData = require('../../src/_data/project');

module.exports = function(collection) {
	const tagList = require('./tagList')(collection);

	const maxPostsPerPage = siteData.paginationLimit;
	const paginatedPosts = [];

	Object.keys(tagList).forEach((tagName) => {
		const taggedPosts = [...collection.getFilteredByTag(tagName)].reverse();
		const numberOfPages = Math.ceil(taggedPosts.length / maxPostsPerPage);

		for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
		const sliceFrom = (pageNum - 1) * maxPostsPerPage;
		const sliceTo = sliceFrom + maxPostsPerPage;

		paginatedPosts.push({
			tagName,
			number: pageNum,
			posts: taggedPosts.slice(sliceFrom, sliceTo),
			first: pageNum === 1,
			last: pageNum === numberOfPages
		});
		}
	});

	return paginatedPosts;
};