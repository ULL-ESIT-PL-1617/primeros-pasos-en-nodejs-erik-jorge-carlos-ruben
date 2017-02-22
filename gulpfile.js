var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('default', ['github', 'build', 'deploy', 'ghpages', 'iaas']);

gulp.task('github', shell.task(['git add .', 'git commit -m "Actualizando servidor"', 'git push origin master']));

gulp.task('build', shell.task(['npm run build']));

gulp.task('deploy', shell.task(['npm run deploy']));

gulp.task('ghpages', function(){return gulp.src('./gh-pages/**/*').pipe(ghPages)});

gulp.task('iaas', shell.task(['npm run iaas']));
