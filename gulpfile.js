var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    mocha = require('gulp-mocha'),
 	gutil = require('gulp-util'),
    reload = browserSync.reload;

gulp.task('default', ['watch' , 'browserSync']);

gulp.task('watch', function() {
	gulp.watch(['scripts/*.js','spec/*.js']).on('change', reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        },
        index:'index.html',
        port: 8181
    });
});

gulp.task('tests', function() {
	return gulp.src(['./mocha-test/*.js'], {
		read : false
	}).pipe(mocha({
		reporter : 'spec'
	})).on('error', gutil.log);
});