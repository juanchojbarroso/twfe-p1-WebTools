var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('concatCss', function() {
  return gulp
    .src('src/styles/**/*.css')
    .pipe(concatCss('super.css'))
    .pipe(gulp.dest('dist'));
});
