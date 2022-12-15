import Page from './Page';

// maps composition types to components
const CompositionMap = {
  page: Page
}

export const compositionRenderer = (component)  => {
  const componentName = component?.type;
  return CompositionMap[componentName] || Page;
};