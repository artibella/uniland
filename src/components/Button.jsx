import { UniformText } from '@uniformdev/canvas-react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const button = cva('button', {
  variants: {
    color: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      accent: ['btn-accent'],
      success: ['btn-success'],
      warning: ['btn-warning'],
      error: ['btn-error'],
      info: ['btn-info'],
    },
    size: {
      large: ['btn-lg'],
      medium: ['btn-md'],
      small: ['btn-sm'],
      xs: ['btn-xs'],
    },
    wide: {
      false: null,
      true: ['btn-wide'],
    },
    block: {
      false: null,
      true: ['btn-block'],
    },
    responsive: {
      false: null,
      true: ['btn-responsive'],
    },
    shape: {
      circle: ['btn-circle'],
      square: ['btn-square'],
    },
    style: {
      link: ['btn-link'],
      outline: ['btn-outline'],
    },
    disabled: {
      false: null,
      true: ['opacity-50', 'cursor-not-allowed'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    disabled: false,
    responsive: false,
    wide: false,
    block: false,
    color: 'primary',
    size: 'medium',
  },
});

const renderButton = ({
  title = '',
  link = '',
  openInNewTab = false,
  style = '',
  intent = '',
  size = '',
  shape = '',
  block = false,
  wide = false,
  responsive = false,
}) => {
  return (
    <Link
      href={link}
      className={button({
        intent,
        size,
        wide,
        block,
        responsive,
        shape,
        style,
      })}
      target={openInNewTab ? '_blank' : '_self'}
      title={title}
    >
      <UniformText parameterId="title" placeholder="Button text" as="span" />
    </Link>
  );
};

export default function Button(props) {
  const { title = '', link = {}, openInNewTab = false, component = {} } = props;
  const style = component?.variant || '';
  const url = link.path?.length ? link.path : '#';

  const buttonProps = {
    ...props,
    title,
    link: url,
    openInNewTab,
    style,
  };

  return renderButton(buttonProps);
}
