import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // automatically opens a browser window with our app
    historyApiFallback: true, // without it page breaks after reloading it on the /about page
  };
}
