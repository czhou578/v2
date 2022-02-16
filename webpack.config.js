const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: __dirname + "/../pages/api/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"]
      },
    ],
  },
  resolve: {
    extensions: [".tsx,", ".css", ".js"], 
  },
  target: "web",
  devTool: "inline-source-map",
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true
  },

  output: {
    filename: "[name].[contenthash].js",
    publicPath: __dirname + "/dist",
  },

}

