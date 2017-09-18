var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('appServer', function(){
	browserSync.init({
		port:8080,
		server:{
			baseDir:"src",
			routes:{
				'/bower_components':'bower_components'
			}
		}
	})

	gulp.watch(['src/**/*.*']).on('change', browserSync.reload);
})