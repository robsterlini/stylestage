var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
    .pipe(reload({
      stream: true,
    }));
});

gulp.task('serve', gulp.series('sass', function() {
  browserSync({
    server: {
      baseDir: 'build',
    },
  });

  gulp.watch('scss/**/*.scss', gulp.series('sass'));
}));

gulp.task('build', gulp.series('sass'));
