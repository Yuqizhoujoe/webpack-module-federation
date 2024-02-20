const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/image-caption.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:9003/",
  },

  mode: "production",

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/page-template.hbs",
      filename: "image-caption.html",
      title: "Image Caption!",
      description: "Image Caption page",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ModuleFederationPlugin({
      name: "ImageCaptionApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ImageCaptionComponent":
          "./src/components/image-caption.component.js",
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },

      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"],
      },
    ],
  },
};
