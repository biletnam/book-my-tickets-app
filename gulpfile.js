var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass   		= require('gulp-sass');
var watch   	= require('gulp-watch');
var minifyCss   = require('gulp-minify-css');
var rename   	= require('gulp-rename');
var uglify      = require('gulp-uglify');




/*

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minifyjs'));
});

gulp.task('watch', function () {
 
});
*/
gulp.task('browser-sync',['sass'],function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./sass-styles/main.scss',['sass']);
    gulp.watch("./**/*").on('change', browserSync.reload);      
});

gulp.task('sass', function () {
  return gulp.src('./sass-styles/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./minifycss'))
    .pipe(browserSync.stream());
});

gulp.task('default',['browser-sync']);