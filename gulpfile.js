var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

gulp.task('styles', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});
gulp.task('css',function(){
	 gulp.src('css/*.css')
		.pipe(csso())
		.pipe(gulp.dest('./minified/'))
});
gulp.task('minify', ['styles', 'css']);
//Watch task
gulp.task('default',function() {
    gulp.watch('sass/*.scss',['minify']);
});
