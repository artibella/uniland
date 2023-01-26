import {
  UniformComposition,
  UniformSlot,
  createUniformApiEnhancer,
} from '@uniformdev/canvas-react';
import Head from 'next/head';
// import appRenderer from '../components';

export default function Page({ composition }) {
  const placeHolder = <div className="h-96"></div>;
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });
  return (
    <>
      <Head>
        <title>{composition?._name}</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div>
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
        >
          <section>
            <UniformSlot name="hero" emptyPlaceholder={placeHolder} />
          </section>
          <section>
            <UniformSlot name="sections" emptyPlaceholder={placeHolder} />
          </section>
        </UniformComposition>
      </div>
    </>
  );
}
