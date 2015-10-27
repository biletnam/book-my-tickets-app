var gulp        = require('gulp');
var sass   		= require('gulp-sass');
var watch   	= require('gulp-watch');
var minifyCss   = require('gulp-minify-css');
var rename   	= require('gulp-rename');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync').create();



gulp.task('sass', function () {
  gulp.src('./sass-styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./minifycss'));
});

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minifyjs'));
});

gulp.task('watch', function () {
  gulp.watch('./sass-styles/main.scss',['sass']);
});

gulp.task('browser-sync',['watch'],function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./**/*").on('change', browserSync.reload);
});

gulp.task('default',['browser-sync']);