var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
  .pipe(less())
  // .pipe(minifyCSS())
  .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
  gulp.watch('./less/*',['less']);
})
