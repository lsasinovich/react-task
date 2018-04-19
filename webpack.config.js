const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

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
  }
}

  return config;
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
  module.exports.mode = "production"
} else if (NODE_ENV == 'development'){
  module.exports.mode = "development"
}