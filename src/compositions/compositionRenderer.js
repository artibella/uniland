import Page from './Page';

const CompositionMap = {
  page: Page
}

export const compositionRenderer = (component)  => {
  const componentName = component?.type;
  return CompositionMap[componentName] || Page;
};