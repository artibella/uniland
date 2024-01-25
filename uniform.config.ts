import type { CLIConfiguration } from '@uniformdev/cli';

const config: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      locale: {},
      category: {},
      component: {},
      pattern: { publish: true },
      composition: { publish: true },
      projectMapDefinition: {},
      projectMapNode: {},
      asset: {},
      contentType: {},
      entry: {},
    },
    directory: './exports',
    format: 'yaml',
  },
};

module.exports = config;
