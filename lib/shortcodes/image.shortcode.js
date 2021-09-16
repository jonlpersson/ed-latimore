const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = async function imageShortcode(src, alt, cls, sizes) {
  const defaultOptions = {
    widths: [320, 600, null],
    formats: ['webp', 'jpeg', null],
    sharpJpegOptions: {
      quality: 90,
      progressive: true,
      withMetadata: false,
      force: false
    },
    sharpPngOptions: {
      compressionLevel: 8,
      force: false
    },
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}.${format}`;
    },
    outputDir: `./_site/images/`,
    urlPath: `/images/`,
  };

  let pathPrefix = './src/_assets';
  let metadata = await Image(path.join(pathPrefix, src), defaultOptions);
  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);

};