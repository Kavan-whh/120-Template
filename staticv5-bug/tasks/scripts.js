import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())// 不写名字会乱码，调用传空则命名为原来命名？
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({// 注释少一份cb.min.js,步骤一命名，同上。
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))// 二压缩
    .pipe(gulp.dest('server/public/js'))// 三存放。先生成缓存最后考虑放哪
    .pipe(gulpif(args.watch,livereload()))
})
