module.exports = function youtube(videoUrl) {
    const url = new URL(videoUrl);
    const id = url.searchParams.get("v");
    return `<div class="aspect-w-16 aspect-h-9 micro-float"><iframe src="https://www.youtube-nocookie.com/embed/${id}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe></div>`;
};