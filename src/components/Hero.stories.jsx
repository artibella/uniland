import React from 'react';

import GenericHero from './GenericHero';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Heros/GenericHero',
  component: GenericHero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    imageUrl: {
      control: 'text'
    },
    body: { control: 'text'}
  },
};

const Template = (args) => <GenericHero {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'This is a hero',
  imageUrl: 'https://placeimg.com/320/480/animals',
  body: 'This is the body text of the hero',
  ctas: [
      {title: 'Read more', link: '#'},
      {title: 'Sign up', link: '#'},
    ]
};

