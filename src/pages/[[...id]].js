import React from 'react';
import getConfig from 'next/config';
import {
  enhance,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from '@uniformdev/canvas';
import {
  useUniformContextualEditing,
  createUniformApiEnhancer,
} from '@uniformdev/canvas-react';
import { canvasClient } from '../lib/canvas';
import { getEnhancers } from '../lib/enhancers/enhancers';
import { projectMapClient } from '../lib/projectMap';
import { compositionRenderer } from '../compositions/compositionRenderer';

const {
  serverRuntimeConfig: { projectId, projectMapId },
} = getConfig();

export default function DynamicComposition({ composition }) {
  // get composition type
  const CompositionType = compositionRenderer(composition);

  return <CompositionType composition={composition} />;
}

export const getStaticProps = async context => {
  const slug = context?.params?.id || '';
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const { preview } = context;

  const { composition } = await canvasClient
    .unstable_getCompositionByNodePath({
      projectMapId,
      projectMapNodePath: slugString ? `/${slugString}` : '/',
      state:
        process.env.NODE_ENV === 'development' || preview
          ? CANVAS_DRAFT_STATE
          : CANVAS_PUBLISHED_STATE,
      unstable_resolveData: true,
    })
    .catch(error => {
      console.warn(error);
      if (error.statusCode === 404) {
        return { notFound: true };
      } else {
        throw error;
      }
    });

  // return 404 if no composition is found
  if (!composition) {
    return { notFound: true };
  }

  await enhance({
    composition,
    enhancers: getEnhancers(),
    context: { preview },
  });

  return {
    props: {
      composition,
    },
  };
};

export async function getStaticPaths() {
  const reservedSlugs = [];

  const { nodes } = await projectMapClient.getNodes({
    projectId,
    projectMapId,
  });

  // TODO: this needs improvement to scale beyond 100 compositions
  const { compositions } = await canvasClient.getCompositionList({
    projectId,
    state: CANVAS_PUBLISHED_STATE,
  });
  const compositionIds = compositions.map(item => item.composition._id);

  const paths = nodes.filter(node => {
    const path = node.path;
    const hasComposition =
      node.type === 'composition' &&
      node.compositionId &&
      compositionIds.includes(node.compositionId);
    const isReservedSlug =
      reservedSlugs.filter(slug => path.includes(slug)).length > 0;
    return hasComposition && !isReservedSlug;
  });

  const staticPaths = paths.map(node => {
    return `${node.path}`;
  });

  return {
    paths: staticPaths || [],
    fallback: true,
  };
}
