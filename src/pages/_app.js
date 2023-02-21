import { UniformContext } from '@uniformdev/context-react';
import Layout from '../layout';
import { createUniformContext } from '../lib/context/uniformContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/page.css';
import initComponents from '../components';

// register and load components
initComponents();

const clientContext = createUniformContext();

function UnilandApp({ Component, pageProps, serverUniformContext }) {
  return (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UniformContext>
  );
}

export default UnilandApp;
