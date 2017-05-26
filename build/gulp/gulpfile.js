'use strict'
var gulp = require('gulp')

gulp.task('a', function(done) {
  for (var i=0; i<100; i++)
  {
    gulp.src('./templates/**/*').pipe(gulp.dest('../../src/pages/t'+i+'/'));
  }

});



