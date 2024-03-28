import { UniformContext } from '@uniformdev/context-react';
import { createUniformContext } from '../lib/context/uniformContext';
import { NextUIProvider } from '@nextui-org/react';
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
      <NextUIProvider>
        <main
          className={`${sourceSerif.variable} ${inter.variable} font-sans light text-foreground bg-background`}
        >
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </UniformContext>
  );
}

export default UnilandApp;
