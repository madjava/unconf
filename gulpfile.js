var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
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