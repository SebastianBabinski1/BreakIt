const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  devServer: {
    open: true,
    port: 9000,
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
