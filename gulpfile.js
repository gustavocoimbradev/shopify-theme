const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const plumber = require("gulp-plumber");
const del = require("del");
const fs = require("fs");
const path = require("path");

const paths = {
  scss: "src/scss/**/!(_)*.scss",        // compila só os arquivos principais (sem underline)
  scssWatch: "src/scss/**/*.scss",       // observa todos, inclusive os _partials
  js: "src/**/*.js",
  temp: "temp/",
  assets: "assets/"
};

function clean() {
  return del([paths.assets + "*", paths.temp + "*"]);
}

function moveFiles(ext) {
  const files = fs.readdirSync(paths.temp);
  files.forEach(file => {
    if (file.endsWith(ext)) {
      const from = path.join(paths.temp, file);
      const to = path.join(paths.assets, file);
      fs.renameSync(from, to);
    }
  });
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
    .pipe(gulp.dest(paths.temp))
    .on("end", () => moveFiles(".min.css"));
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
    .pipe(gulp.dest(paths.temp))
    .on("end", () => moveFiles(".min.js"));
}

function watchFiles() {
  gulp.watch(paths.scssWatch, compileSCSS);
  gulp.watch(paths.js, compileJS);
}

const build = gulp.series(clean, gulp.parallel(compileSCSS, compileJS));
const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.default = watch;
