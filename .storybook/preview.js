import '../src/styles/globals.css';
import '../src/styles/page.css';
import { sourceSerif, inter } from '../src/lib/fonts';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <main className={`${sourceSerif.variable} ${inter.variable} font-sans`}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
