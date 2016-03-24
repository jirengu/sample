/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22
 */

var gulp = require('gulp');
var rjs = require('gulp-requirejs');

//var exec = require('child_process').exec;  //用于执行终端命令

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'), // js压缩
    concat = require('gulp-concat'), // 合并文件
    rename = require('gulp-rename'), // 重命名
    clean = require('gulp-clean'); //清空文件夹



// 合并、压缩、重命名css

var cssfiles = [
    './src/css/base.css',
    './src/css/index.css'
];

gulp.task('task-name', function(){
    console.log('hello');
});

gulp.task('css-index', function() {
    gulp.src(cssfiles) // gulp.src("./src/css/*.css")
    .pipe(concat('index.merge.min.css')) //样式合并  
    // .pipe(rename({
    // 	suffix: '.min'
    // }))
    .pipe(minifycss()) //压缩
    .pipe(gulp.dest('./dist/css/'));
});



//https://github.com/RobinThrift/gulp-requirejs
gulp.task('js-index', function() {
    rjs({
        baseUrl: "./src/js",
        paths: {
            'jquery': 'lib/bower_components/jquery/dist/jquery.min'
        },
        name: "main",
        out: "index.merge.min.js"
    })
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));

    gulp.src("./src/js/lib/bower_components/requirejs/require.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));

});



// 自动更新
// http://www.browsersync.io/docs/gulp/
var browserSync = require('browser-sync').create();

gulp.task('watch', ['js-index', 'css-index'], function() {
    browserSync.reload();
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./src/**/*.css', './src/**/*.js', './*.html'], ['watch']);
});


gulp.task('default', ['css-index', 'js-index']);






// 传统方法合并，压缩js文件
// gulp.task('js-index', function() {
// 	gulp.src("./src/js/*.js")
// 		.pipe(concat('merge.js'))
// 		.pipe(rename({
// 			suffix: '.min'
// 		}))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./dist/js/'));
// });


// gulp.task('task', function() {

// 	exec('git add .; git commit -am "sth"; git push;', function(err){
// 		cosole.log(err);
// 	})

// });