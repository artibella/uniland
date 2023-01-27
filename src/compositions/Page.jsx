import {
  UniformComposition,
  UniformSlot,
  createUniformApiEnhancer,
} from '@uniformdev/canvas-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Section from '../components/Section';
import LottieAnimation from '../components/LottieAnimation';

export default function Page({ composition }) {
  const placeHolder = <div className="h-96"></div>;
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  const router = useRouter();

  // show spinner if fallback
  if (router.isFallback) {
    return (
      <Section theme="light">
        <div className="flex items-center justify-center">
          <LottieAnimation
            id="spinner"
            src="/animations/spinner.json"
            width="300px"
            height="300px"
            autoplay="true"
          />
          <h1 className="center text-xl">Loading...</h1>
        </div>
      </Section>
    );
  }

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
