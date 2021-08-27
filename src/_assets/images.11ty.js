const path = require("path");
const util = require("util");
const glob = require("glob");
const sharp = require("sharp");
const mkdirp = require("mkdirp");
const { options } = require("cssesc");
const fs = require("fs");
const _ = require("lodash");

const outputPath = "_site/assets/images/";

const resizeConf = {
  sizes: [
    {
      width: 320,
      rename: { suffix: "-320" },
    },
    {
      width: 550,
      rename: { suffix: "-550" },
    },
  ],
  jpegOptions: {
    quality: 90,
    progressive: true,
    withMetadata: false,
    force: false,
    //   withoutEnlargement: true,
    //   errorOnUnusedImage: false,
    //   errorOnEnlargement: false
  },
  pngOptions: {
    compressionLevel: 8,
    force: false,
  },
};

module.exports = class {
  async data() {
    const filePath = path.join(__dirname, `/images/`);

    return {
      permalink: `/assets/images/images.json`,
      eleventyExcludeFromCollections: true,
      filePath,
    };
  }

  readOptimizationLog() {
    const optimizationLogAsJSON = fs.readFileSync(
      `${__dirname}/optimized.json`,
      "utf-8"
    );
    const optimizationLog = JSON.parse(optimizationLogAsJSON);

    return optimizationLog || [];
  }

  updateOptimizationLog(images) {
    const optimizationLog = this.readOptimizationLog();

    const updatedLog = [
      ...optimizationLog,
      ...(images || []).map((image) => {
        return { image, optimizedAt: new Date().toISOString() };
      }),
    ];

    fs.writeFileSync(
      `${__dirname}/optimized.json`,
      JSON.stringify(updatedLog, null, 2)
    );
  }

  async loadImages(imgFolder) {
    const classInstance = this;
    const cwd = path.resolve(imgFolder.file);
    const getImages = util.promisify(glob);
    const optimizationLog = this.readOptimizationLog();
    const processedImages = [];

    const imgs = await getImages("**/*(*.jpg|*.png|*.gif)", {
      cwd: cwd,
      ignore: optimizationLog.map(({ image }) => image),
    });

    imgs.forEach(function (img) {
      const ext = path.extname(img);
      const base = path.basename(img, ext);
      const dir = path.dirname(img);

      mkdirp.sync(path.join(outputPath, dir));

      let passThroughImg = sharp(imgFolder.file + img);
      passThroughImg.toFile(path.join(outputPath, dir, base + ext));

      resizeConf.sizes.forEach(function (size) {
        const newPath = path.join(
          outputPath,
          dir,
          base + size.rename.suffix + ext
        );
        const image = sharp(imgFolder.file + img);
        image
          .jpeg(resizeConf.jpegOptions)
          .png(resizeConf.pngOptions)
          .resize({
            width: size.width,
            withoutEnlargement: true,
            kernel: "lanczos2",
          })
          .toFile(newPath);
      });

      processedImages.push(img);
    });

    classInstance.updateOptimizationLog(processedImages);

    return JSON.stringify(processedImages, null, "\t");
  }

  async render({ filePath }) {
    try {
      return await this.loadImages({ file: filePath });
    } catch (err) {
      throw new Error(err);
    }
  }
};
