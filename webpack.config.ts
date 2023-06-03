import path from "path";
import webpack from "webpack"; //to access built-in plugins
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    // not just the 'bundle.js' to avoid the browser caching the file and returning the old data
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // to remove the old bundle
  },
  plugins: [
    // adding index.html to the bundle build
    new HtmlWebpackPlugin({
      // use html file as a template just to add scripts (root class inside body)
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // after that there is no need to specify file extension while importing
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
