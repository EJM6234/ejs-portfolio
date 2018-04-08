var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('assets/css/style.scss')
		.pipe(sass({
			includePaths: './node_modules/bootstrap-sass/assets/stylesheets'
		}))
		.pipe(gulp.dest('./assets/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('fonts', function() {
	return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*')
		.pipe(gulp.dest('./assets/fonts'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('assets/css/*.scss', ['sass']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('./assets/javascript/*.js', browserSync.reload);
});
