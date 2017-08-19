import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 处理包的顺序问题

// gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
gulp.task('build',gulpSequence('clean'));
