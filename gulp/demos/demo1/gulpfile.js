/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
	uglify = require('gulp-uglify'), // js压缩
	concat = require('gulp-concat'), // 合并文件
<<<<<<< HEAD
	// rename = require('gulp-rename'), // 重命名
	// clean = require('gulp-clean'), //清空文件夹
=======
	rename = require('gulp-rename'), // 重命名
	clean = require('gulp-clean'), //清空文件夹
>>>>>>> 1d357b09a043e0c1790868d751fcfa3b5b323b17
	minhtml = require('gulp-htmlmin'), //html压缩
	jshint = require('gulp-jshint'), //js代码规范性检查
	imagemin = require('gulp-imagemin'); //图片压缩


gulp.task('html', function() {
<<<<<<< HEAD
  gulp.src('src/*.html')
=======
  return gulp.src('src/*.html')
>>>>>>> 1d357b09a043e0c1790868d751fcfa3b5b323b17
    .pipe(minhtml({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(argument) {
<<<<<<< HEAD
	gulp.src('src/**/*.css')
=======
	gulp.src('src/css/*.css')
>>>>>>> 1d357b09a043e0c1790868d751fcfa3b5b323b17
		.pipe(concat('merge.min.css'))
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('js', function(argument) {
	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
<<<<<<< HEAD
		.pipe(concat('merge.min.js'))
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
=======
		.pipe(concat('merge.js'))
		.pipe(rename({
			suffix: '.min'
		}))
>>>>>>> 1d357b09a043e0c1790868d751fcfa3b5b323b17
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function(argument){
	gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
});

<<<<<<< HEAD
// gulp.task('clear', function(){
// 	gulp.src('dist/*',{read: false})
// 		.pipe(clean());
// });
=======
gulp.task('clear', function(){
	gulp.src('dist/*',{read: false})
		.pipe(clean());
});
>>>>>>> 1d357b09a043e0c1790868d751fcfa3b5b323b17

gulp.task('build', ['html', 'css', 'js', 'img']);
