var gulp = require('gulp');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var mainjs = './src/main.js';

gulp.task('bundle', function () {
	browserify(mainjs, {
			standalone: 'keu'
		})
		.bundle()
		.pipe(source(mainjs))
		.pipe(rename({
			dirname: "/",
			basename: "keu"
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('bundle-min', function () {
	browserify(mainjs, {
			standalone: 'keu'
		})
		.bundle()
		.pipe(source(mainjs))
		.pipe(streamify(uglify()))
		.pipe(rename({
			dirname: "/",
			basename: "keu",
			suffix: ".min"
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
	gulp.start('bundle', 'bundle-min');
});

gulp.task('watch', function () {
	gulp.watch('./src/*.js', ['bundle', 'bundle-min']);
});
