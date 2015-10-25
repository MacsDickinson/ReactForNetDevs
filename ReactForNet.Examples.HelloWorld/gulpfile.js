/// <binding ProjectOpened='watch' />
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("compile-jsx", function () {
    return gulp.src("Scripts/templates/*.jsx")
      .pipe(babel())
      .pipe(gulp.dest("Scripts/templates/"));
});

gulp.task('watch', ['compile-jsx'], function () {
    gulp.watch("Scripts/templates/*.jsx", ['compile-jsx']);
});