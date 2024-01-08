const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const isProduction = !!env.WEBPACK_BUILD;
  return {
    mode: isProduction ? "production" : "development",
    entry: ["./index.js"],
    devtool: isProduction ? false : "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader"
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "docs"),
      publicPath: ""
    }
  };
};
