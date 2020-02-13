const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = env => {
  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        components: path.resolve(__dirname, "./src/components/"),
        context: path.resolve(__dirname, "./src/context/"),
        functions: path.resolve(__dirname, "./src/functions/")
      }
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "build.js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            // type checking is done by the fork plugin
            transpileOnly: true
          },
          exclude: /dist/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new webpack.DefinePlugin({
        "process.env.development": !!(env && !env.production)
      }),
      new ForkTsCheckerWebpackPlugin({ eslint: true })
    ]
  };
};