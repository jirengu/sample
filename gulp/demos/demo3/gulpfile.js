/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var clean = require('gulp-clean');

gulp.task("index", function() {
  var jsFilter = filter("**/*.js", {restore: true});
  var cssFilter = filter("**/*.css", {restore: true});

  var userefAssets = useref.assets();


  return gulp.src("src/index.html")
    .pipe(userefAssets)      // Concatenate with gulp-useref
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())               // Minify any CSS sources
    .pipe(cssFilter.restore)
    .pipe(rev())                // Rename the concatenated files
    .pipe(userefAssets.restore())
    .pipe(useref())
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('dist'));
});

gulp.task('clear', function(){
	gulp.src('dist/*',{read: false})
		.pipe(clean());
});