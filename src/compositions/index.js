import { registerUniformComponent } from '@uniformdev/canvas-react';

import Page from './Page';

// maps composition types to React components
const CompositionMap = {
  page: Page,
};

const initCompositions = () => {
  for (let composition in CompositionMap) {
    registerUniformComponent({
      type: composition,
      component: CompositionMap[composition],
    });
  }
};

export default initCompositions;
