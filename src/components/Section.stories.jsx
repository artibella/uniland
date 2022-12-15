import React from 'react';

import GenericHero from './GenericHero';
import Section from './Section';


const heroData = 
    {
        title: "This is an animal",
        imageUrl: "https://placeimg.com/640/480/animals",
        body: 'because it is nice to look at animals',
        ctas: [
          {
            title: 'Read more',
            link: '#'
          }
        ]
    };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Containers/Section',
  component: Section,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Section title={args.title}>
    <GenericHero {...heroData}/>
  </Section>
)

export const SeciontWithHero = Template.bind({});
SeciontWithHero.args = {
  title: 'Section with hero',
};
