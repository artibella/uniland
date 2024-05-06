import type { CLIConfiguration } from '@uniformdev/cli';

const config: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      locale: {},
      category: {},
      component: {},
      componentPattern: { publish: true },
      entryPattern: { publish: true },
      composition: { publish: true },
      dataType: {},
      projectMapDefinition: {},
      projectMapNode: {},
      asset: {},
      contentType: {},
      entry: {},
      redirect: {},
      quirk: {},
      enrichment: {},
      aggregate: {},
      signal: {},
    },
    directory: './exports',
    format: 'yaml',
  },
};

module.exports = config;
