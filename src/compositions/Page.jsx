import { UniformSlot } from '@uniformdev/canvas-react';
import Layout from '../layout';
import Head from 'next/head';

export default function Page({ composition }) {
  const placeHolder = <div className="h-96"></div>;

  return (
    <>
      <Head>
        <title>{composition?._name}</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Layout>
        <div className="page-wrapper">
          <section>
            <UniformSlot name="hero" emptyPlaceholder={placeHolder} />
          </section>
          <section>
            <UniformSlot name="sections" emptyPlaceholder={placeHolder} />
          </section>
        </div>
      </Layout>
    </>
  );
}
