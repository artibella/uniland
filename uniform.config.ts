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
      compositionPattern: { publish: true },
      dataType: {},
      projectMapDefinition: {},
      projectMapNode: {},
      asset: {},
      contentType: {},
      entry: { publish: true },
      previewViewport: {},
      previewUrl: {},
      redirect: {},
      quirk: {},
      enrichment: {},
      aggregate: {},
      signal: {},
      //workflow: {},
    },
    directory: './exports',
    format: 'yaml',
  },
};

module.exports = config;
