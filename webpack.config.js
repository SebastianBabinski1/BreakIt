const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    client: './client', 
    server:'./server'
  },
  output: {
    filename: '[name]/[name].js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$|ts$|jsx$|tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$|png$|jpg$/,
        use: 'file-loader',
      },
    ],
  },

  devServer: {
    open: true,
    port: 9000,
  },

  plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
};
