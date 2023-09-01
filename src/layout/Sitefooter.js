import { Footer } from 'react-daisyui';
import { ToggleEmbeddedContextDevTools } from '@uniformdev/context-devtools';
import getConfig from 'next/config';

export default function Sitefooter({ children }) {
  const {
    publicRuntimeConfig: { projectId, canvasApiHost, canvasApiKey },
  } = getConfig();

  return (
    <div className="site-footer mt-32">
      <Footer className="p-10 bg-dark text-base-content">
        <div>
          <Footer.Title>
            This is a ficticious website for demoing proposes only
          </Footer.Title>
          <a className="link link-hover" href="https://uniform.dev">
            Learn more about Uniform
          </a>
        </div>
        <div>
          <ToggleEmbeddedContextDevTools
            initialSettings={{
              apiHost: canvasApiHost,
              apiKey: canvasApiKey,
              projectId: projectId,
            }}
          />
        </div>
      </Footer>
    </div>
  );
}
