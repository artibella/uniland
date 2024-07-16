import React from 'react';
import {
  UniformComposition,
  createUniformApiEnhancer,
} from '@uniformdev/canvas-react';
import { enhance } from '@uniformdev/canvas';
import { getEnhancers } from '../lib/enhancers/enhancers';
import { withUniformGetServerSideProps } from '@uniformdev/canvas-next/route';

export default function DynamicComposition({ composition }) {
  // add enhancer
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  return (
    <UniformComposition
      data={composition}
      contextualEditingEnhancer={contextualEditingEnhancer}
      behaviorTracking="onLoad"
    />
  );
}

export const getServerSideProps = withUniformGetServerSideProps({
  requestOptions: context => {
    return {
      diagnostics: process.env.NODE_ENV === 'development',
      locale: context.locale ?? context.defaultLocale,
    };
  },
  modifyPath: (path, context) => {
    const locale = context.locale ?? context.defaultLocale;
    const localizedPath = `/${locale}${path}`.replace(/\/$/, '');
    return localizedPath;
  },
  preview: process.env.NODE_ENV === 'development',

  handleComposition: async (routeResponse, context) => {
    if (
      routeResponse.compositionApiResponse.errors?.some(e => e.type === 'data')
    ) {
      console.log('Page has data errors');
      console.log(routeResponse.compositionApiResponse.errors);
      // return null;
    }
    const composition = routeResponse.compositionApiResponse.composition;

    // enhance composition
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
