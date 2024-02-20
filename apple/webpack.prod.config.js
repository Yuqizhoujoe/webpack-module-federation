const path = require("path");

// plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/apple-page.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:9002/",
  },

  mode: "production",

  module: {
    rules: [
      // asset
      {
        test: /\.(png|jpg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },

      // css style
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // js babel
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // html template
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
      title: "Apple",
      description: "Apple page",
      filename: "apple.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ModuleFederationPlugin({
      name: "AppleApp",
      filename: "remoteEntry.js",
      // export components
      exposes: {
        "./ApplePage": "./src/components/apple-page/apple-page.component.js",
      },
      // import components
      remotes: {
        ImageCaptionApp: "ImageCaptionApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
