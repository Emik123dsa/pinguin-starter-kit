import 'zone.js/node';
import { join } from 'path';

import * as express from 'express';
import { StringUtils } from '@pinguin/utils';
import { Type } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { existsSync } from 'fs';
import { APP_SERVER_BASE_HREF_PROVIDER } from './providers';

export function app(serverModule: Type<object>): express.Express {
  const server: express.Express = express();

  const distFolder = join(process.cwd(), 'dist/jira-client/browser');

  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: serverModule,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    }),
  );

  server.get('*', (req: express.Request, res: express.Response) => {
    res.render(indexHtml, {
      req,
      providers: [APP_SERVER_BASE_HREF_PROVIDER(req)],
    });
  });

  return server;
}

export function bootstrap(serverModule: Type<object>, port: number) {
  const server = app(serverModule);
  server.listen(port, () => {
    console.log(
      StringUtils.format(
        'Server application has been started on the port: %s',
        port,
      ),
    );
  });
}
