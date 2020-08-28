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
    publicPath: "/", // 用react router时修复报错‘<’格式错误
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]s[x]?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/, // 一定要有，不然loader会对node_modules中的文件进行检测
      },
      { enforce: "pre", test: /\.[tj]s[x]$/, loader: "source-map-loader" },
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
              sourceMap: false,
              importLoaders: 2,
              modules: {
                auto: /!\.ant\.\w+$/i, // 对不含有.ant.less的文件进行module化，防止antd的样式被module
                localIdentName: "[path]_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        sideEffects: true,
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
        sideEffects: true,
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
      inject: true,
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
