import { AppServerModule } from './main.server';
import { bootstrap } from '@pinguin/server';

declare const __non_webpack_require__: NodeRequire;

const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';

const serverPort: number = Number(process.env['APP_SERVER_PORT']) || 8080;

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap(AppServerModule, serverPort);
}

export * from './main.server';
