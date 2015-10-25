/// <binding ProjectOpened='watch' />
var gulp = require('gulp'),
    print = require('gulp-print'),
    ts = require('gulp-typescript'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    module: 'AMD',
    removeComments: true,
    jsx: 'react',
    sortOutput: true
});

gulp.task('tsx-compile', function () {
    var tsResult = gulp.src('Scripts/**/*.tsx')
                       .pipe(sourcemaps.init())
                       .pipe(ts(tsProject))

    tsResult.js
        .pipe(concat('templates.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./' + project.webroot + '/scripts/'));

    tsResult.dts
        .pipe(concat('templates.d.ts'))
        .pipe(gulp.dest('./Scripts/definitions'));
});

gulp.task('copy-js', ['tsx-compile'], function () {
    gulp.src('Scripts/**/*.js')
        .pipe(gulp.dest('./' + project.webroot + '/scripts/'))
});

gulp.task('watch', ['copy-js'], function () {
    gulp.watch('Scripts/**/*.tsx', ['copy-js'])
});