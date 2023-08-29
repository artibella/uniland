import '../components';
import { BackgroundDecorator } from '../playground/decorators/BackgroundDecorator';
import { ResponsiveDecorator } from '../playground/decorators/ResponsiveDecorator';
import {
  createUniformApiEnhancer,
  UniformPlayground,
} from '@uniformdev/canvas-react';

const PlaygroundPage = () => {
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  return (
    <UniformPlayground
      contextualEditingEnhancer={contextualEditingEnhancer}
      decorators={[ResponsiveDecorator, BackgroundDecorator]}
    />
  );
};

export { PlaygroundPage as default };
