import { enhance } from "@uniformdev/canvas";
import { createPreviewHandler } from '@uniformdev/canvas-next'
import getConfig from "next/config";
import { getEnhancers } from "../../lib/enhancers/enhancers";

const handler = createPreviewHandler({
  secret: () => getConfig().serverRuntimeConfig.previewSecret,
  // add custom routing logic
  // render compositions without project map node under "preview" route
  resolveFullPath: ({slug, path}) => {
    const previewSlug = slug.length ? `/preview/${slug}` : '';
    return path?.length ? path : previewSlug;
  },
  // run project enhancers
  enhance: (composition) =>
    enhance({ composition, enhancers: getEnhancers(), context: { preview: true } })
})

export default handler;