// require('!!file-loader?name=index.html!../../index.html')
module.exports = {
  js: {
    jquery: require('!!file-loader?name=dll/js/[name].[ext]!jquery')
  },
  nui: {
   // js: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/bootstrap.min.js'),
    css: require('!!file-loader?name=dll/css/[name].[ext]!../dll/css/nui.css')
  },
  xenon: {
    bootstrap: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/bootstrap.min.js'),
    TweenMax: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/TweenMax.min.js'),
    resizeable: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/resizeable.js'),
    css: require('!!file-loader?name=dll/css/[name].[ext]!../dll/css/xenon.css'),
    xenonApi: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/xenon-api.js'),
    xenonToggles: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/xenon-toggles.js'),
    xenonCustom: require('!!file-loader?name=dll/xenon/js/[name].[ext]!../../vendor/xenon/js/xenon-custom.js')
  }
  // dll: {
  //   js: require('!!file-loader?name=dll/dll.js!../../dll/dll.js'),
  //   css: require('!file-loader?name=dll/dll.css!../../dll/dll.css'),
  // },
}
