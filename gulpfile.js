'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('clean', async function () {
  del.sync('dist')
});

//---
function style() {
    //1.where is my scss
    return gulp.src('./scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through scss compiler
    .pipe(sass().on('error',sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('./css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}
//---

gulp.task('bsync', function () {
  //spin up dev server
  browserSync.init({
    server: "./",
    hostname: "server",
    port: 5500, //even if apache is running on 80 or 8080 or something else
  });
  //when css files change, reload browserSync
  gulp.watch('./css/*.css').on('change', browserSync.reload );
  gulp.watch('./*.html').on('change', browserSync.reload );  
  gulp.watch('./js/*.js').on('change', browserSync.reload );

  gulp.watch('./scss/**/*.scss', style);
});

gulp.task('build', gulp.series('clean'));

gulp.task('default', gulp.series('bsync'));
