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
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
    ],
    type: 'javascript/auto'
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
  }

}