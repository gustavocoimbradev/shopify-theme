const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const plumber = require("gulp-plumber");
const fs = require("fs");

const paths = {
  scss: "src/scss/**/*.scss",
  scssEntry: "src/scss/index.scss",
  js: "src/js/*.js",
  img: "src/img/**/*",
  liquid: "**/*.liquid",
  assets: "assets/"
};

gulp.task("scss", function () {
  return gulp.src(paths.scssEntry)
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.assets));
});

gulp.task("js", function () {
  return gulp.src(paths.js)
    .pipe(plumber())
    .pipe(rename({ suffix: ".min" }))
    .pipe(terser())
    .pipe(gulp.dest(paths.assets));
});

gulp.task("img", function () {
  return gulp.src(paths.img)
    .pipe(gulp.dest(paths.assets));
});

gulp.task("liquid", function (done) {
  gulp.series("scss")(done);
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, gulp.series("scss"));
  gulp.watch(paths.js, gulp.series("js"));
  gulp.watch(paths.img, gulp.series("img"));
  gulp.watch(paths.liquid, gulp.series("liquid"));
});

gulp.task("default", gulp.parallel("scss", "js", "img", "watch"));
