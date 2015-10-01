// load the plugins
var gulp      = require('gulp');
var less      = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename    = require('gulp-rename');
var git       = require('gulp-git');
var prompt       = require('gulp-prompt');

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

// src is the file(s) to add (or ./*) test
gulp.task('add', function(){
  return gulp.src(['!node_modules/', './*' ])
    .pipe(git.add({args: '-A'}));
});

// src are the files to commit (or ./*) 
gulp.task('commit', function(){
  return gulp.src([ '!node_modules/', './*' ])
    .pipe(git.commit('12'));
});

// git push
gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});


gulp.task('default', ['css']);
