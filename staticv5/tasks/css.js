import gulp from 'gulp'
// import gulpif from 'gulp-if'
// import livereload from 'gulp-livereload';

// import args from './util/args';
import sass from 'gulp-sass'


gulp.task('css',()=>{
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))// 流已经进行到这一步，在这里进行监听最好
})
