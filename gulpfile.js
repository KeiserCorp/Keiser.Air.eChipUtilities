var gulp = require('gulp');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var amdclean = require('gulp-amdclean');

var mainjs = './src/main.js';

gulp.task('bundle', function () {
	browserify(mainjs).bundle()
	.pipe(source(mainjs))
	.pipe(rename({
			dirname : "/",
			basename : "keu"
		}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('clean-bundle', function () {
	browserify(mainjs).bundle()
	.pipe(source(mainjs))
	.pipe(streamify(amdclean.gulp({
				'prefixMode' : 'standard'
			})))
	.pipe(rename({
			dirname : "/",
			basename : "keu",
			suffix : ".clean"
		}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('min', function () {
	browserify(mainjs).bundle()
	.pipe(source(mainjs))
	.pipe(streamify(uglify()))
	.pipe(rename({
			dirname : "/",
			basename : "keu",
			suffix : ".min"
		}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
	gulp.start('bundle', 'min', 'clean-bundle');
});

gulp.task('watch', function () {
	gulp.watch('./src/*.js', ['bundle', 'min']);
});
