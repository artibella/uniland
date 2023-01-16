import { Composition, Slot } from '@uniformdev/canvas-react';
import Head from 'next/head';
// import appRenderer from '../components';

export default function Page({ composition }) {
  const placeHolder = <div className="h-96"></div>;
  return (
    <>
      <Head>
        <title>{composition?._name}</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div>
        <Composition data={composition}>
          <section>
            <Slot name="hero" emptyPlaceholder={placeHolder} />
          </section>
          <section>
            <Slot name="sections" emptyPlaceholder={placeHolder} />
          </section>
        </Composition>
      </div>
    </>
  );
}
