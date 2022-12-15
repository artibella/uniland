/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withPackages = require('next-transpile-modules')(['react-daisyui']);

const config = withPackages({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    deviceSizes: [320, 420, 768, 1024, 1280],
    path: 'https://res.cloudinary.com/contentops/image/fetch',
  },
  publicRuntimeConfig: {
    appVersion: process.env.npm_package_version,
    projectId: process.env.UNIFORM_PROJECT_ID,
    canvasApiHost: process.env.UNIFORM_CLI_BASE_URL,
    canvasApiKey: process.env.UNIFORM_API_KEY,
    projectMapId: process.env.UNIFORM_PROJECT_MAP_ID,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,    
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT,
    contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    contentfulPreviewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    contentstackApiKey: process.env.CONTENTSTACK_API_KEY,
    contentstackDeliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    contentstackEnvironment: process.env.CONTENTSTACK_ENVIRONMENT,
    uniformContextOutputType: process.env.UNIFORM_CONTEXT_OUTPUT_TYPE || 'standard',
    gtmStreamId: process.env.GTM_STREAM_ID
  },
  serverRuntimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    canvasApiHost: process.env.UNIFORM_CLI_BASE_URL,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
    projectMapId: process.env.UNIFORM_PROJECT_MAP_ID,
    bigCommerceStoreHash: process.env.BIGCOMMERCE_STORE_HASH,
    bigCommerceToken: process.env.BIGCOMMERCE_TOKEN,
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT,
    contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    contentfulPreviewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    contentstackApiKey: process.env.CONTENTSTACK_API_KEY,
    contentstackDeliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    contentstackEnvironment: process.env.CONTENTSTACK_ENVIRONMENT,
    gtmStreamId: process.env.GTM_STREAM_ID
  },
});

module.exports = config;