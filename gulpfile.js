let gulp = require('gulp');
let concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');


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

gulp.task('sourcesMaps', function(done) {
  gulp.src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
    done();
});