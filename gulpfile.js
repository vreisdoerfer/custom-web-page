const gulp = require("gulp");
const zip = require("gulp-zip");
const { src, series, parallel, dest, watch } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));
const terser = require("gulp-terser");
const minifyCss = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

const jsPath = "src/js/**/**.js";
const cssPath = "src/css/**/**.scss";

const copyHtml = () => {
  return src("src/*.html").pipe(gulp.dest("dist"));
};

const copyAssets = () => {
  return src("src/assets/**/*.svg").pipe(gulp.dest("dist/assets"));
};

const jsTask = () => {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("index.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"));
};

const bundleSass = () => {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(concat("bundle.css"))
    .pipe(dest("dist/css"));
};

const zipFiles = () => {
  var srcZip = gulp
    .src(["./gulpfile.js", "./package.json", "./src/**", "!./src/src.zip"], { base: "./" })
    .pipe(zip("src.zip"))
    .pipe(gulp.dest("src"));
  var distZip = gulp
    .src(["dist/**", "!./dist/dist.zip"], { base: "./" })
    .pipe(zip("dist.zip"))
    .pipe(gulp.dest("dist"));
  return srcZip, distZip;
};

const watchTasks = () => {
  watch([cssPath, jsPath], { interval: 1000 }, parallel(bundleSass, jsTask));
};

exports.copyHtml = copyHtml;
exports.copyAssets = copyAssets;
exports.jsTask = jsTask;
exports.bundleSass = bundleSass;
exports.zipFiles = zipFiles;
exports.default = series(
  parallel(copyHtml, copyAssets, jsTask, bundleSass, zipFiles),
  watchTasks
);
