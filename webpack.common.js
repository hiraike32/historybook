const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: ".",
    publicPath: "/dist/",
    port: 8888,
    inline: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, "src")],
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              root: ".",
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]_[local]_[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
  }
};
