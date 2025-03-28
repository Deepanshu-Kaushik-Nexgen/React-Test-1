const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ts|tsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
      }

    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          //Note:- No wildcard is specified hence will copy all files and folders
          from: "src/Assets", //Will resolve to RepoDir/src/assets
          to: "assets", //Copies all files from above dest to dist/assets
        },
        {
          //Required for launching in the tizen studio
          from: "config.xml",
          to: "config.xml"
        }
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};