const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 8888
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
        test: /\.s?css$/,
        include: [path.join(__dirname, "src")],
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "styleTag"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[path]_[local]_[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  }
};
