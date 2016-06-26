var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching html files
gulp.task('browse', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['browse']);