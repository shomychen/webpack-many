var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var dirVars = require('./base/dir-vars.config.js')
var pageArr = require('./base/page-entries.config.js')
var configPlugins = [
  new webpack.DllReferencePlugin({
    context: path.join(__dirname, '../../'),
    manifest: require('../../src/dll/utils-manifest.json') // eslint-disable-line
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname, '../../'),
    manifest: require('../../src/dll/nui-manifest.json')
  })
]
pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/index.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/page.js`),
    chunks: ['manifest', 'vendor', page],
    hash: true, // 为静态资源生成hash值
    xhtml: true
  })
  configPlugins.push(htmlPlugin)
})
module.exports = configPlugins
