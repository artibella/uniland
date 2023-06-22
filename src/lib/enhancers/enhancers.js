// import { contentfulEnhancer, contentfulMultiEnhancer, contentfulQueryEnhancer } from './contentful/index.js';
// import { contentstackEnhancer } from './contentstack/index.js';

import { EnhancerBuilder } from '@uniformdev/canvas';
// import {
//   CANVAS_CONTENTFUL_PARAMETER_TYPES,
//   CANVAS_CONTENTFUL_MULTI_PARAMETER_TYPES,
//   CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
// } from "@uniformdev/canvas-contentful";
// import {
//   CANVAS_CONTENTSTACK_PARAMETER_TYPES,
//   CANVAS_CONTENTSTACK_MULTI_PARAMETER_TYPES,
//   CANVAS_CONTENTSTACK_QUERY_PARAMETER_TYPES
// } from "@uniformdev/canvas-contentstack";
import contributerListEnhancer from './components/contributerList.js';
import imageUrlEnhancer from './parameters/imageUrl.js';
import contentfulRichTextEnhancer from './parameters/richtext.js';

export const getEnhancers = () => {
  return (
    new EnhancerBuilder()
      // // Contentful
      // .parameterType(
      //   CANVAS_CONTENTFUL_PARAMETER_TYPES,
      //   contentfulEnhancer
      // )
      // .parameterType(
      //   CANVAS_CONTENTFUL_MULTI_PARAMETER_TYPES,
      //   contentfulMultiEnhancer
      // )
      // .parameterType(
      //   CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
      //   contentfulQueryEnhancer
      // )
      // // Contentstack
      // .parameterType(
      //   CANVAS_CONTENTSTACK_PARAMETER_TYPES,
      //   contentstackEnhancer
      // )
      // .parameterType(
      //   CANVAS_CONTENTSTACK_MULTI_PARAMETER_TYPES,
      //   contentstackEnhancer
      // )
      // .parameterType(
      //   CANVAS_CONTENTSTACK_QUERY_PARAMETER_TYPES,
      //   contentstackEnhancer
      // )
      // Component enhancers
      .component('contributorList', contributerListEnhancer)
      .parameterName('imageUrl', imageUrlEnhancer)
      .parameterName('externalRichText', contentfulRichTextEnhancer)
  );
};
