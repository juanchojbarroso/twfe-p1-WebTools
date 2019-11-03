let gulp = require('gulp');
let concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');

gulp.task('concatCss', function() {
  return gulp
    .src('src/styles/**/*.css')
    .pipe(concatCss('super.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minifyCss', () => {
  return gulp
    .src('src/styles/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});
