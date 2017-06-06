var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    utils: ["moment", "./vendor/b", "./vendor/c"],
    xenon: ['./vendor/xenon/less/base.less'],
    nui: ['vue', 'nui-js','./src/assets/theme/default/src/index.css', './vendor/xenon/less/extension.css']
  },
  output: {
    path: path.join(__dirname, "../src/dll/"),
    filename: "[name].js",
    library: "[name]_[hash]"
  },
  module:  {
    loaders:  [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('img','[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: path.posix.join('fonts','[name].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader!postcss-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!less-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "../src/dll/", "[name]-manifest.json"),
      name: '[name]_[hash]'
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: path.posix.join('[name].css')
    }),
  ]
};
