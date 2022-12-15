import React from 'react';

import ContributorList from './ContributorList';


const contributorsData = [
    {
        name: "Bella Tucker",
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        link: "#"
    },
    {
        name: "Charlie Bennett",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        link: "#"
    },
    {
        name: "Brett Lewis",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        link: ""
    },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ContributorList',
  component: ContributorList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    byline: { control: 'text' },

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContributorList {...args} />;

export const Single = Template.bind({});
Single.args = {
  byline: 'Written by',
  contributors: [contributorsData[0]]
};

export const Multiple = Template.bind({});
Multiple.args = {
  byline: 'Written by',
  contributors: contributorsData
};