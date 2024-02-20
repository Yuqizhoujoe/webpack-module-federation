const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/image-caption.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:9003/",
  },

  mode: "development",
  devServer: {
    port: 9003,
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
    devMiddleware: {
      index: "image-caption.html",
      writeToDisk: true,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/page-template.hbs",
      filename: "image-caption.html",
      title: "Image Caption!",
      description: "Image Caption page",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
    ],
  },
};
