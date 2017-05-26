var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var dirVars = require('./base/dir-vars.config.js')
var pageArr = require('./base/page-entries.config.js')
var configPlugins = []
pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/app.ejs`),
    chunks: ['manifest', 'vendor', page],
    hash: true, // 为静态资源生成hash值
    xhtml: true
  })
  configPlugins.push(htmlPlugin)
})
module.exports = configPlugins
