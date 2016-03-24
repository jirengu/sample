/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');


var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var fs = require('fs');
var GulpSSH = require('gulp-ssh');



//shell操作 git, 

gulp.task('git', shell.task(['git add .', 'git commit -am "dd"', 'git push -u origin dev']));

gulp.task('clear', shell.task(['find . -name ".DS_Store" -depth -exec rm {} \\;']));



//操作远程主机
var gulpSSH = new GulpSSH({
	ignoreErrors: false,
	sshConfig: {
		host: '121.40.201.213',
		port: 22,
		username: 'root',
		privateKey: fs.readFileSync('/Users/wingo/.ssh/id_rsa')
	}
});



gulp.task('remote', function() {
	return gulpSSH
		.shell(['cd /var/www/fe.jirengu.com', 'git pull origin dev', 'rm -rf _runtime']);
});



gulp.task('build', function(callback) {
	runSequence(
		'git',
		'clear',
		'remote',
		callback
	);
});


gulp.task('watch', function() {
	gulp.watch(['**/*.css', '**/*.js', '**/*.html', '**/*.php'], ['build']);
});