var path = require("path");
var webpack = require('webpack');
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    dll: ["./vendor/beta", "./vendor/b", "./vendor/c"]
  },
  output: {
    path: path.join(__dirname, "../src/dll/"),
    filename: "[name].js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "../src/dll/", "[name]-manifest.json"),
      name: '[name]_[hash]'
    })
  ]
};
