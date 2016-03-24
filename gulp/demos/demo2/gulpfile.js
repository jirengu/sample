/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');

// 引入组件
var browserSync = require('browser-sync').create();
var scp = require('gulp-scp2');
var fs = require('fs');


gulp.task('reload', function(){
	browserSync.reload();
});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});

	gulp.watch(['**/*.css', '**/*.js', '**/*.html'], ['reload', 'scp']);
});



gulp.task('scp', function() {
	return gulp.src('src/**/*')
		.pipe(scp({
			host: '121.40.201.213',
			username: 'root',
			privateKey: fs.readFileSync('/Users/wingo/.ssh/id_rsa'),
			dest: '/var/www/fe.jirengu.com',
			watch: function(client) {
				client.on('write', function(o) {
					console.log('write %s', o.destination);
				});
			}
		}))
		.on('error', function(err) {
			console.log(err);
		});
});