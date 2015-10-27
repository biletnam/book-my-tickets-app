var gulp        = require('gulp');
var sass   		= require('gulp-sass');
var watch   	= require('gulp-watch');
var minifyCss   = require('gulp-minify-css');
var rename   	= require('gulp-rename');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
  gulp.src('./sass-styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./minifycss'));
});

gulp.task('minify-css', function () {
    gulp.src('./minifycss/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./minifycss'));
});

gulp.task('watch', function () {
  gulp.watch('./sass-styles/main.scss',['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['watch']);