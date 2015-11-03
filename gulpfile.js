// load the plugins
var gulp      = require('gulp');
var less      = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename    = require('gulp-rename');

// define a task called css
gulp.task('css', function() {
  // grab the less file, process the LESS, save to style.css
  return gulp.src('public/assets/css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('watch', function() {
  // watch the less file and run the css task
  gulp.watch('public/assets/css/style.less', ['css']);
});

gulp.task('default', ['css']);
