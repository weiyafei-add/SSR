const path = require("path");
const nodeExternalas = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");

const serverConfig = {
  mode: "development",
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: [nodeExternalas()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(webpackBaseConfig, serverConfig);
