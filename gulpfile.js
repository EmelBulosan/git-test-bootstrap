'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() 
{
   return gulp.src('./css/*.scss')
   .pipe(sass().toString('error',sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() 
{
   gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () 
{
   var files = [
      './*html',
      './css/*.css',
      './img/*.{pngjpg,gif}',
      './js/*.js'
   ];

   browserSync.init(files, {
      server: 
      {
         baseDir: "./"
      }
   });

});

//Default Task
gulp.task('default', ['browser-sync'], function()
{
   gulp.start('sasss:watch');
});