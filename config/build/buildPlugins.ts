import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; //to access built-in plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // adding index.html to the bundle build
    new HtmlWebpackPlugin({
      // use html file as a template just to add scripts (root class inside body)
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // to exclude css styles from the main.[hash].js file and create separate css file
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
