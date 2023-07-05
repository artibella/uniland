import React from 'react';
import {
  enhance,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from '@uniformdev/canvas';
import { getEnhancers } from '../lib/enhancers/enhancers';
import { compositionRenderer } from '../compositions/compositionRenderer';
import { withUniformGetServerSideProps } from '@uniformdev/canvas-next/route';

export default function DynamicComposition({ composition }) {
  // get composition type
  const CompositionType = compositionRenderer(composition);

  return <CompositionType composition={composition} />;
}

export const getServerSideProps = withUniformGetServerSideProps({
  requestOptions: {
    diagnostics: true,
  },
  preview: process.env.NODE_ENV === 'development',

  handleComposition: async (routeResponse, context) => {
    if (
      routeResponse.compositionApiResponse.errors?.some(e => e.type === 'data')
    ) {
      // if we got data errors, we could not resolve a data resource and we could choose to return a 404 instead of partial content
      // eslint-disable-next-line no-console
      console.log('Page has data errors');
      console.log(routeResponse.compositionApiResponse.errors);
      // return null;
    }
    const composition = routeResponse.compositionApiResponse.composition;
    await enhance({ composition, enhancers: getEnhancers(), context });

    // example of extending props with your own needs
    return {
      props: {
        composition: composition,
        pageTitle: composition?._name,
      },
    };
  },
});
