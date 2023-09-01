import { enhance } from '@uniformdev/canvas';
import { createPreviewHandler } from '@uniformdev/canvas-next';
import { getEnhancers } from '../../lib/enhancers/enhancers';

const handler = createPreviewHandler({
  secret: () => process.env.UNIFORM_PREVIEW_SECRET,
  playgroundPath: '/playground',
  // run project enhancers
  enhance: composition =>
    enhance({
      composition,
      enhancers: getEnhancers(),
      context: { preview: true },
    }),
});

export default handler;
