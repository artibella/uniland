import {
  createContentfulEnhancer,
  createContentfulMultiEnhancer,
  createContentfulQueryEnhancer,
  ContentfulClientList
} from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { contentfulSpaceId, contentfulEnvironment, contentfulDeliveryToken, contentfulPreviewToken },
} = getConfig();


const contentfulClient = createClient({
  space: contentfulSpaceId,
  environment: contentfulEnvironment,
  accessToken: contentfulDeliveryToken,
});

const contentfulPreviewClient = createClient({
  space: contentfulSpaceId,
  environment: contentfulEnvironment,
  accessToken: contentfulPreviewToken,
  host: "preview.contentful.com",
});

const clientList = new ContentfulClientList([
  {
    spaceId: contentfulSpaceId,
    environment: contentfulEnvironment,
    client: contentfulClient,
    previewClient: contentfulPreviewClient,
  },
]);

// create the Contentful enhancers with client list
export const contentfulEnhancer = createContentfulEnhancer({ client: clientList });
export const contentfulMultiEnhancer = createContentfulMultiEnhancer({ clients: clientList });
export const contentfulQueryEnhancer = createContentfulQueryEnhancer({ clients: clientList });
