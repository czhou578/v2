const CopyPlugin = require("copy-webpack-plugin");

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
    extensions: [".tsx,", ".css", ".pdf", ".js"], 
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
    publicPath: "/",
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "resume", to: "resume" },
        { from: "resume/resume.pdf", to: "/resume.pdf"}
      ]
    })
  ]
}

