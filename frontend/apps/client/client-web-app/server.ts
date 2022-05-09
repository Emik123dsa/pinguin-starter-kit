import { AppServerModule } from './src/main.server';
import { bootstrap } from '@pinguin/server';

declare const __non_webpack_require__: NodeRequire;

const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';

const port = process.env.PORT || 8080;

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap(AppServerModule, port);
}

export * from './src/main.server';
