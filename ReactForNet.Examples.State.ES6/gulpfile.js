/// <binding ProjectOpened='watch' />
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("compile-es6", function () {
    return gulp.src("Scripts/templates/*.jsx")
      .pipe(babel())
      .pipe(gulp.dest("Scripts/templates/"));
});

gulp.task('watch', ['compile-es6'], function () {
    gulp.watch("Scripts/templates/*.jsx", ['compile-es6']);
});