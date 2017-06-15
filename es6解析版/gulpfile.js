'use strict';
var gulp=require('gulp');
var browserSync=require('browser-sync').create();
var reload =browserSync.reload;

var sass=require('gulp-sass');

// 静态服务器 + 监听 css/html/js文件
gulp.task('serve',function(){
  browserSync.init({
    server:'./public'
  });

  gulp.watch('public/scss/*.scss', ['sass']);
  gulp.watch('public/css/*.css').on('change',reload);
  gulp.watch('public/js/*.js').on('change',reload);
  gulp.watch('public/*.html').on('change',reload);

});

gulp.task('sass',function(){
  return gulp.src('public/scss/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./public/css'));
})




gulp.task('default', ['serve','sass']);
