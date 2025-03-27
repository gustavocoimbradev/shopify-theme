const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const plumber = require("gulp-plumber");
const fs = require("fs");
const { execSync } = require("child_process");

const paths = {
  scss: "src/scss/*.scss",
  js: "src/js/*.js",
  img: "src/img/**/*",
  assets: "assets/"
};

gulp.task("scss", function (done) {
  gulp.src(paths.scss)
    .pipe(plumber())
    .pipe(rename(function (path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(sass())
    .pipe(gulp.dest(paths.assets))
    .on("end", () => {
      fs.readdirSync(paths.assets)
        .filter(f => f.endsWith(".min.css"))
        .forEach(file => {
          const filePath = `${paths.assets}${file}`;
          const content = fs.readFileSync(filePath, "utf8");

          if (!content.startsWith('@import "tailwindcss";')) {
            fs.writeFileSync(filePath, '@import "tailwindcss";\n' + content, "utf8");
          }

          const tempPath = `${filePath}.tailwind`;
          execSync(`npx tailwindcss -i "${filePath}" -o "${tempPath}" --minify`, { stdio: "inherit" });
          fs.renameSync(tempPath, filePath);
        });
      done();
    });
});

gulp.task("js", function () {
  return gulp
    .src(paths.js)
    .pipe(plumber())
    .pipe(rename({ suffix: ".min" }))
    .pipe(terser())
    .pipe(gulp.dest(paths.assets));
});

gulp.task("img", function () {
  return gulp
    .src(paths.img)
    .pipe(gulp.dest(paths.assets));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, gulp.series("scss"));
  gulp.watch(paths.js, gulp.series("js"));
  gulp.watch(paths.img, gulp.series("img"));
});

gulp.task("default", gulp.parallel("scss", "js", "img", "watch"));
