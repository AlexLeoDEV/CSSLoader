'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/style'))
});

gulp.task('watch', function() {
    gulp.watch('src/style/**/*.scss', gulp.series(['sass']));
});