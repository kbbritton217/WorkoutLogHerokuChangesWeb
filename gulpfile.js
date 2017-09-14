var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var sourcemaps = require('gulp-sourcemaps');

var javascriptFiles = [
	'./app.js',
	'./workouts/define.js',
	'./workouts/log.js',
	'./user/auth.js',
	'./workouts/exercise.js'
];

gulp.task('bundle', function() {
	return gulp.src(javascriptFiles)
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js')) // squash files together into bundle.js
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps/'))
		.pipe(gulp.dest('./dist'));// save into /dist folder
});



gulp.task('default', ['bundle']);