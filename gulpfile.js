// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Initiated..')
});

gulp.task('sass', function () {
    return gulp.src('src/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['watch']);


gulp.task('watch', function() {
    gulp.watch('src/*.sass', ['sass']);
});
