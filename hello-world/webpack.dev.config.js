const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/hello-world-page.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:9001/",
  },

  mode: "development",
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
    devMiddleware: {
      index: "hello-world.html",
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      // css style
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    // https://www.linkedin.com/pulse/module-federation-micro-frontends-webpack-5-prasenjit-sutradhar
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
