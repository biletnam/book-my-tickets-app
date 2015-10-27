var gulp        = require('gulp');
var sass   = require('gulp-sass');
var watch   = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync']);