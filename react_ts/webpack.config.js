var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
var ROOT = path.resolve(__dirname);

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: ROOT + "/dist",
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map.js",
  },
  module: {
    rules: [
      { test: /\.ts[x]?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.ts[x]$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        include: ROOT + "/src",
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.png/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
    alias: {
      "@": ROOT + "/src",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CheckerPlugin(),
  ],
  devServer: {
    host: "0.0.0.0",
    port: 7000,
    disableHostCheck: true,
    hot: true,
    compress: true,
    clientLogLevel: "none",
    //    watchContentBase: true,
    //    quiet: true
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
