import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as nconf from 'nconf';

@Injectable()
export class AppConfigService extends ConfigService {
  private static config: Record<string, any>;

  private static buildConfig() {
    nconf.argv().env();
    nconf.env({ separator: '__' });

    const envName = nconf.get('NODE_ENV');
    const overridableEnvironments = ['test', 'development', 'production'];

    if (overridableEnvironments.includes(envName)) {
      nconf.file(envName, `${process.cwd()}/src/config/files/${envName}.json`);
    }

    nconf.file('local', `${process.cwd()}/src/config/files/local.json`);

    return nconf.get();
  }

  private static getConfig() {
    if (!this.config) this.config = this.buildConfig();
    return this.config;
  }

  constructor() {
    super(AppConfigService.getConfig());
  }
}
