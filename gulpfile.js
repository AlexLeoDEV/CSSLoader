'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', gulp.parallel(['sass']), () => {
    gulp.watch('sass/**/*.scss', ['sass']);
});