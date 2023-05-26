import React from 'react';
import getConfig from 'next/config';
import { enhance, CANVAS_DRAFT_STATE } from '@uniformdev/canvas';
import { getEnhancers } from '../lib/enhancers/enhancers';
import { canvasClient } from '../lib/canvas';
import { compositionRenderer } from '../compositions/compositionRenderer';
// import {
//   withUniformGetStaticProps,
//   withUniformGetStaticPaths,
// } from '@uniformdev/canvas-next/project-map';
import { unstable_withUniformGetServerSideProps } from '@uniformdev/canvas-next/route';

const {
  serverRuntimeConfig: { projectMapId },
} = getConfig();

export default function DynamicComposition({ composition }) {
  // get composition type
  const CompositionType = compositionRenderer(composition);

  return <CompositionType composition={composition} />;
}

// export const getStaticProps = withUniformGetStaticProps({
//   param: 'route',
//   client: canvasClient,
//   callback: async (context, composition) => {
//     if (composition) {
//       // run enhancers
//       await enhance({ composition, enhancers: getEnhancers(), context });
//     } else {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: {
//         composition,
//       },
//     };
//   },
// });

// export const getStaticPaths = withUniformGetStaticPaths({
//   projectMapId: projectMapId,
// });

export const getServerSideProps = unstable_withUniformGetServerSideProps({
  requestOptions: {
    state: CANVAS_DRAFT_STATE,
    diagnostics: true,
  },
  async handleComposition(routeResponse, context, _defaultHandler) {
    if (
      routeResponse.compositionApiResponse.errors?.some(e => e.type === 'data')
    ) {
      // if we got data errors, we could not resolve a data resource and we choose to return a 404 instead of partial content
      // eslint-disable-next-line no-console
      console.log(routeResponse.compositionApiResponse.errors);
      console.log('Returning 404 because data errors');
      // return null;
    }
    const composition = routeResponse.compositionApiResponse.composition;
    await enhance({ composition, enhancers: getEnhancers(), context });

    // example of extending props with your own needs
    // to use default `data` prop for the composition, return defaultHandler(routeResponse);
    return {
      props: {
        composition: composition,
        pageTitle: routeResponse.compositionApiResponse.composition?._name,
      },
    };
  },
});
