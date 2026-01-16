import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; // to access built-in plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    // adding index.html to the bundle build
    new HtmlWebpackPlugin({
      // use html file as a template just to add scripts (root class inside body)
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // to exclude css styles from the main.[hash].js file and create separate css file
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev), // global variable
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }], // copy locales folder to build folder to have translations in production build
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    // prettier-ignore
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
