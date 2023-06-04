import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; //to access built-in plugins

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
  ];
}
