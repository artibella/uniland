import React from 'react';
import getConfig from 'next/config';
import { enhance } from '@uniformdev/canvas';
import { getEnhancers } from '../lib/enhancers/enhancers';
import { canvasClient } from '../lib/canvas';
import { compositionRenderer } from '../compositions/compositionRenderer';
import {
  withUniformGetStaticProps,
  withUniformGetStaticPaths,
} from '@uniformdev/canvas-next/project-map';

const {
  serverRuntimeConfig: { projectMapId },
} = getConfig();

export default function DynamicComposition({ composition }) {
  // get composition type
  const CompositionType = compositionRenderer(composition);

  return <CompositionType composition={composition} />;
}

export const getStaticProps = withUniformGetStaticProps({
  client: canvasClient,
  requestOptions: {
    unstable_resolveData: true,
  },
  callback: async (context, composition) => {
    if (composition) {
      // run enhancers
      await enhance({ composition, enhancers: getEnhancers(), context });
    } else {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        composition,
      },
    };
  },
});

export const getStaticPaths = withUniformGetStaticPaths({
  projectMapId: projectMapId,
});
