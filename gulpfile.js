const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
//must use in terminal
//npm install gulp-purgecss --save-dev
//then ^C and gulp
//const purgecss = require('gulp-purgecss')
function buildStyles() {
  return (
    src("scss-files/**/*.scss")
      .pipe(sass())
      //.pipe(purgecss({content: ['*.html']}))
      .pipe(dest("css"))
  );
}

function watchTask() {
  watch(["scss-files/**/*.scss" /*,  "*.html"*/], buildStyles);
}
//all comments to lower the file size on index.css

exports.default = series(buildStyles, watchTask);
