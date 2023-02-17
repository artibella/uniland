import { enhance } from '@uniformdev/canvas';
import { createPreviewHandler } from '@uniformdev/canvas-next';
import { getEnhancers } from '../../lib/enhancers/enhancers';

const handler = createPreviewHandler({
  secret: () => process.env.UNIFORM_PREVIEW_SECRET,
  // add custom routing logic
  // render compositions without project map node under "preview" route
  resolveFullPath: ({ slug, path }) => {
    const previewSlug = slug && slug.length ? `/preview/${slug}` : '';
    return path?.length ? path : previewSlug;
  },
  // run project enhancers
  enhance: composition =>
    enhance({
      composition,
      enhancers: getEnhancers(),
      context: { preview: true },
    }),
});

export default handler;
