import '../components';
import { BackgroundDecorator } from '../playground/decorators/BackgroundDecorator';
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
      decorators={[BackgroundDecorator]}
    />
  );
};

export { PlaygroundPage as default };
