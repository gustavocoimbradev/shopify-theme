const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const plumber = require("gulp-plumber");
const del = require("del");
const path = require("path");

const paths = {
  src: "src/**/*",
  scss: "src/**/*.scss",
  js: "src/**/*.js",
  assets: "assets/"
};

function clean() {
  return del([paths.assets + "*"]);
}

function compileSCSS() {
  return gulp.src(paths.scss)
    .pipe(plumber())
    .pipe(sass({ quietDeps: true }))
    .pipe(cleanCSS())
    .pipe(rename(file => {
      file.dirname = "";
      file.basename += ".min";
      file.extname = ".css";
    }))
    .pipe(gulp.dest(paths.assets));
}

function compileJS() {
  return gulp.src(paths.js)
    .pipe(plumber())
    .pipe(terser())
    .pipe(rename(file => {
      file.dirname = "";
      file.basename += ".min";
      file.extname = ".js";
    }))
    .pipe(gulp.dest(paths.assets));
}

function watchFiles() {
  gulp.watch(paths.src, gulp.series(compileSCSS, compileJS));
}

const build = gulp.series(clean, gulp.parallel(compileSCSS, compileJS));
const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = watch;
