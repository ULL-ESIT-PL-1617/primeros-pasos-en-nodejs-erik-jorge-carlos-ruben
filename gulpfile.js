var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', []);

gulp.task('build', shell.task(['npm run build']));