import { UniformContext } from '@uniformdev/context-react';
import { createUniformContext } from '../lib/context/uniformContext';
import '../styles/globals.css';
import '../styles/page.css';
// import components
import initComponents from '../components';
// import fonts
import { sourceSerif, inter } from '../lib/fonts';

// register and load components
initComponents();

const clientContext = createUniformContext();

function UnilandApp({ Component, pageProps, serverUniformContext }) {
  return (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <main className={`${sourceSerif.variable} ${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </UniformContext>
  );
}

export default UnilandApp;
