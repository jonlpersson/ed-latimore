import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import spawn from 'cross-spawn';
import cssnano from 'cssnano';
import { dest, series, src, task, watch } from 'gulp';
import postcss from 'gulp-postcss';
import atimport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import replace from 'gulp-replace';

const SITE_ROOT = './_site';
const POST_BUILD_STYLESHEET = `${SITE_ROOT}/assets/css/`;
const PRE_BUILD_STYLESHEET = './site/css/main.css';
const TAILWIND_CONFIG = './tailwind.config.js';

// Fix for Windows compatibility
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

const isDevelopmentBuild = process.env.NODE_ENV === 'development';

task('buildJekyll', () => {
  browserSync.notify('Building Jekyll site...');

  const args = ['exec', jekyll, 'build'];

  if (isDevelopmentBuild) {
    args.push('--incremental');
  }

  return spawn('bundle', args, { stdio: 'inherit' });
});

task('processStyles', () => {
  browserSync.notify('Compiling styles...');

  return src(PRE_BUILD_STYLESHEET)
    .pipe(
      postcss([
        atimport(),
        tailwindcss(TAILWIND_CONFIG),
        ...(isDevelopmentBuild ? [] : [autoprefixer(), cssnano()]),
      ])
    )
    .pipe(dest(POST_BUILD_STYLESHEET));
});

// Task to replace escaped square brackets to render footnotes
task('renderFootnotes', () => {
  return src('./site/_posts/*.md')
  .pipe(replace(/\\\[\^(\d*)\\]/g, '[^$1]'))
  .pipe(dest('./site/_posts/'));
});

task('startServer', () => {
  browserSync.init({
    files: [SITE_ROOT + '/**'],
    open: 'local',
    port: 4000,
    server: {
      baseDir: SITE_ROOT,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
  });

  watch(
    [
      '**/*.css',
      '**/*.html',
      '**/*.svg',
      '**/*.js',
      '**/*.md',
      '**/*.yml',
      '**/*.markdown',
      'site/assets/**/*',
      '!_site/**/*',
      '!node_modules/**/*',
      '!site/.jekyll-cache/**/*',
      '!.tweet-cache/**/*',
    ],
    { interval: 500 },
    buildSite
  );
});

const buildSite = series('buildJekyll', 'processStyles', 'renderFootnotes');

exports.serve = series(buildSite, 'startServer');
exports.default = series(buildSite);
