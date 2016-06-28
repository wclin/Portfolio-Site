var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync').create();

// Static Server
gulp.task('browse', function() {

    browserSync.init({
        server: "./framework"
    });
});

// Minify stlye.css
gulp.task('styles', function(){
    gulp.src('framework/css/style.css')
        .pipe(minifyCSS())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('framework/css/'));
});

//Watch html + styles.css
gulp.task('watch', function() {
    gulp.watch('framework/css/style.css', ['styles']);
    gulp.watch("framework/css/*.min.css").on('change', browserSync.reload);
    gulp.watch("framework/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'watch', 'browse']);