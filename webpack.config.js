const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, options) {
  
  const config = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "none" : "source-map",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
    new HtmlWebpackPlugin({
        title: "Example",
        hash: true,
        template: "./client/index.html"
    })
  ],
  
  watch: true,

  devServer: {
    contentBase: "./dist"
  }
}

  return config;
};