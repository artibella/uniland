import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Actions/Button',
  component: Button,
  // argTypes: {
  //   startIcon: {
  //     control: false,
  //   },
  //   endIcon: {
  //     control: false,
  //   },
  // },
};

export const Default = args => {
  return <Button {...args} />;
};

export const BrandColors = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args} title="Default" />
      {/* <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="ghost">
        Ghost
      </Button> */}
      {/* <Button {...args} variant="link">
        Link
      </Button> */}
    </div>
  );
};
BrandColors.args = {};

/*
export const ActiveButtons = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>Default</Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
      <Button {...args} color="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  );
};
ActiveButtons.args = { active: true };

export const StateColors = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  );
};
StateColors.args = {};

export const OutlineButtons = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="accent">
        Accent
      </Button>
    </div>
  );
};
OutlineButtons.args = {
  variant: 'outline',
};

export const OutlineButtonsWithStateColors = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </div>
  );
};
OutlineButtonsWithStateColors.args = {
  variant: 'outline',
};

export const ButtonSizes = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args}>Normal</Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="xs">
        Tiny
      </Button>
    </div>
  );
};
ButtonSizes.args = {};

export const ResponsiveButton = args => {
  return <Button {...args}>Responsive</Button>;
};
ResponsiveButton.args = { responsive: true };

export const WideButton = args => {
  return <Button {...args}>Wide</Button>;
};
WideButton.args = { wide: true };

export const Glass = args => {
  return (
    <div
      className="w-full flex justify-center py-8 rounded-md"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <Button {...args}>Glass button</Button>
    </div>
  );
};
Glass.args = {
  glass: true,
};

export const DifferentHtmlTags = args => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Button {...args} tag="a" role="button">
        Link
      </Button>
      <Button {...args} type="submit">
        Button
      </Button>
      <Button {...args} tag="input" type="button" value="Input" />
      <Button {...args} tag="input" type="submit" value="Submit" />
      <Button {...args} tag="input" type="radio" aria-label="Radio" />
      <Button {...args} tag="input" type="checkbox" aria-label="Checkbox" />
      <Button {...args} tag="input" type="reset" value="Reset" />
    </div>
  );
};
DifferentHtmlTags.args = {};

export const DisabledButtons = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>Disabled using attribute</Button>
      <Button
        className="btn btn-disabled"
        tabIndex={-1}
        role="button"
        aria-disabled="true"
      >
        Disabled using class name
      </Button>
    </div>
  );
};
DisabledButtons.args = {
  disabled: true,
};

export const SquareButton = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button {...args} variant="outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </div>
  );
};
SquareButton.args = {
  shape: 'square',
};

export const CircleButton = args => {
  return (
    <div className="flex items-center gap-2">
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <Button {...args} variant="outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </div>
  );
};
CircleButton.args = {
  shape: 'circle',
};

export const IconAtStart = args => {
  return (
    <Button
      {...args}
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      }
    >
      Button
    </Button>
  );
};

export const IconAtEnd = args => {
  return (
    <Button
      {...args}
      endIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      }
    >
      Button
    </Button>
  );
};

export const ButtonBlock = args => {
  return <Button {...args}>Block</Button>;
};
ButtonBlock.args = {
  fullWidth: true,
};

export const LoadingSpinner = args => {
  return <Button {...args} />;
};
LoadingSpinner.args = {
  loading: true,
  shape: 'square',
};

export const LoadingSpinnerAndText = args => {
  return <Button {...args}>loading</Button>;
};
LoadingSpinnerAndText.args = {
  loading: true,
};

export const WithoutClickAnimation = args => {
  return <Button {...args}> I don't have click animation </Button>;
};
WithoutClickAnimation.args = {
  animation: false,
};

export const LinkButton = args => {
  return <Button {...args}> Link </Button>;
};
LinkButton.args = {
  tag: 'a',
  target: '_blank',
  rel: 'noopener',
  href: 'https://daisyui.com/',
};
*/
