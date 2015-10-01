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

// src is the file(s) to add (or ./*) 
gulp.task('add', function(){
  return gulp.src('./*')
    .pipe(git.add({args: '.'}));
});

// git commit task with gulp prompt
gulp.task('commit', function(){
  // just source anything here - we just wan't to call the prompt for now
  gulp.src('package.json')
  .pipe(prompt.prompt({
      type: 'input',
      name: 'commit',
      message: 'Please enter commit message...'
  },  function(res){
    // now add all files that should be committed
    // but make sure to exclude the .gitignored ones, since gulp-git tries to commit them, too
    return gulp.src([ '!node_modules/', './*' ], {buffer:false})
    .pipe(git.commit(res.commit));
  }));
});

// git push
gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});


gulp.task('default', ['css']);
