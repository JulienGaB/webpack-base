const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.less$/,
            use: [{
              loader: 'style-loader'
            }, {
              loader: 'css-loader'
            }, {
              loader: 'less-loader'
            }
          ]
        }]
      },
      plugins: [
        new ExtractTextWebpackPlugin("styles.css")
      ]
  };
