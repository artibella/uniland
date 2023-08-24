import '../components';

import {
  createUniformApiEnhancer,
  UniformPlayground,
} from '@uniformdev/canvas-react';

const PlaygroundPage = () => {
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  return (
    <UniformPlayground contextualEditingEnhancer={contextualEditingEnhancer} />
  );
};

export { PlaygroundPage as default };
