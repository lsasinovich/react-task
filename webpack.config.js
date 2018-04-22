const webpack = require('webpack');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(NODE_ENV);
var isProd = process.env.NODE_ENV === 'production' // true or false

module.exports = function(env, options) {
  
  const config = {
  entry: {
    index: './client/index.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      { 
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        loader: 'file-loader', 
        test: /\.(ttf|eot|svg)$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      }),
    new HtmlWebpackPlugin({
        title: "Example",
        hash: true,
        template: "./client/index.html"
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'USER']),
  ],
  
  watch: NODE_ENV == 'development',

  devtool: NODE_ENV == 'development' ? 'source-map' : '',

  devServer: {
    contentBase: "./dist",
    compress: true,
    open: true
  },

  mode: NODE_ENV
}

if (NODE_ENV == 'production') {
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
} 

  return config;
};
