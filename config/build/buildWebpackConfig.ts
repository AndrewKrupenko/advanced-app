import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      // not just the 'bundle.js' to avoid the browser caching the file and returning the old data
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // to remove the old bundle
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    ...(isDev && {
      devtool: "inline-source-map",
      devServer: buildDevServer(options),
    }),
  };
}
