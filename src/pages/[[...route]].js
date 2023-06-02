import React from 'react';
import getConfig from 'next/config';
import {
  enhance,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from '@uniformdev/canvas';
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
    diagnostics: true,
    state:
      process.env.NODE_ENV === 'development'
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  },
  handleComposition: async (routeResponse, context) => {
    if (
      routeResponse.compositionApiResponse.errors?.some(e => e.type === 'data')
    ) {
      // if we got data errors, we could not resolve a data resource and we choose to return a 404 instead of partial content
      // eslint-disable-next-line no-console
      console.log('Page has data errors');
      console.log(routeResponse.compositionApiResponse.errors);
      // return null;
    }
    const composition = routeResponse.compositionApiResponse.composition;
    await enhance({ composition, enhancers: getEnhancers(), context });

    // example of extending props with your own needs
    // to use default `data` prop for the composition, return defaultHandler(routeResponse);
    return {
      props: {
        composition: composition,
        pageTitle: composition?._name,
      },
    };
  },
});
