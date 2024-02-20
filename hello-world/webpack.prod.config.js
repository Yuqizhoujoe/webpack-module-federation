const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/hello-world-page.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:9001/",
  },

  mode: "production",

  module: {
    rules: [
      // css style
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // babel js
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // js template
      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/page-template.hbs",
      title: "Hello world!",
      description: "Hello world page",
      filename: "hello-world.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWorldButton":
          "./src/components/hello-world-button/hello-world-button.js",
        "./HelloWorldPage":
          "./src/components/hello-world-page/hello-world-page.component.js",
      },
    }),
  ],
};
