import packageJson from 'package.json';

import { Version } from '@angular/core';

export const VERSION: Version = new Version(
  `${packageJson.version}-${packageJson.name}`
);
