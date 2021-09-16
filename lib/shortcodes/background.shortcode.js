const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = async function backgroundShortcode(src) {
  const defaultOptions = {
    widths: [null],
    formats: ["jpeg"],
    sharpJpegOptions: {
      quality: 95,
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

  return `--bg-img: url('${metadata.jpeg[0].url}');`;

};
