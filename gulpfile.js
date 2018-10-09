'user strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),	

	path: {
		tasks: require('./glp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath){
 require(taskPath)();
});


$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('pug','stylus'),
	$.gulp.parallel('watch','serve')
	));


