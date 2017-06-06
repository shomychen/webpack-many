'use strict'
var gulp = require('gulp')
var fs = require('fs')
// 生成测试模板
let copyTempCount = 2
gulp.task('copy:temp', function (done) {
  for (var i = 0; i < copyTempCount; i++) {
    gulp.src('./templates/**/*').pipe(gulp.dest('../../src/pages/test/t' + i + '/'));
  }
  return done()
});
gulp.task('copy:temp:nav',['copy:temp'], function (done) {
  fs.readFile('../../src/nav.config.json', 'utf8', function (err, data) {
    if (err) console.log(err)
    var dataNew = [] // JSON.parse(data)
    for (var i = 0; i < copyTempCount; i++) {
      dataNew.push({
        'path': 'test/t' + i,
        'url': '/test/t' + i + '/index.html',
        'title': '测试' + i
      })
    }
    var testList = JSON.parse(data)
    testList[0].list = dataNew
    fs.writeFile('../../src/nav.config.json', JSON.stringify(testList, null, 2), function (err) {
      if (err) throw err
      return done()
    })
  })
})



