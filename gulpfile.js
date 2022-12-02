const gulp = require('gulp');

const browsersync = require('browser-sync').create();
const SSI = require('browsersync-ssi');

const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const concat = require('gulp-concat');
const lost = require('lost');
const uglify = require('gulp-uglify');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './app/',
      //index: './en-us/resources/full-report/index.html'
      index: './pt-br/resources/full-report/index.html'
    },
    ghostMode: true,
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return gulp
    .src([
      './node_modules/normalize.css/normalize.css',
      './node_modules/slick-carousel/slick/slick.css',
      './node_modules/slick-carousel/slick/slick-theme.css',
      './src/scss/*.scss'
    ])
    .pipe(concat('style.min.css'))
    .pipe(postcss([atImport(), autoprefixer(), precss(), cssnano(), lost()]))
    .pipe(gulp.dest('./app/en-us/resources/full-report/assets/css'))
    .pipe(gulp.dest('./app/pt-br/resources/full-report/assets/css'))
    .pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/slick-carousel/slick/slick.js',
      './node_modules/progressbar.js/dist/progressbar.js',
      './src/js/modernizr-3.11.2.js',
      './src/js/main.js'
    ])
      .pipe(concat('script.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/en-us/resources/full-report/assets/js'))
      .pipe(gulp.dest('app/pt-br/resources/full-report/assets/js'))
      .pipe(browsersync.stream()));
}

function watchFiles() {
  gulp.watch('./src/scss/*.scss', css);

  gulp.watch([
    './src/js/*.js',
  ], scripts);

  gulp.watch('./app/**/*.html', browserSyncReload);
}

const js = gulp.series(scripts);
const build = gulp.series(css);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;

exports.default = watch;