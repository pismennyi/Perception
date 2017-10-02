var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sass: path.resolve('./sass'),
	css: path.resolve('./css')
};

gulp.task('sass', () => {
 return gulp.src([`${paths.sass}/**/main.scss`])
   .pipe(sass())
	 .pipe(autoprefixer({
			 browsers: ['last 2 versions'],
			 cascade: false
	 }))
   .pipe(gulp.dest(paths.css));
});

gulp.task('sass:watch', () => {
 gulp.watch(`${paths.sass}/**/*.scss`, ['sass']);
});
