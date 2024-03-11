import { UniformText } from '@uniformdev/canvas-react';
import classNames from 'classnames';
import Link from 'next/link';

const renderButton = ({
  title = '',
  link = '',
  openInNewTab = false,
  variant = '',
  color = '',
  size = '',
  shape = '',
  block = false,
  wide = false,
  responsive = false,
}) => {
  const baseClasses = classNames('btn');

  const colorClasses = classNames(
    { 'btn-neutral': color === 'neutral' },
    { 'btn-primary': color === 'primary' },
    { 'btn-secondary': color === 'secondary' },
    { 'btn-accent': color === 'accent' },
    { 'btn-success': color === 'success' },
    { 'btn-warning': color === 'warning' },
    { 'btn-error': color === 'error' },
    { 'btn-info': color === 'info' },
    { 'btn-ghost': color === 'ghost' }
  );
  const variantClasses = classNames(
    { 'btn-link': variant === 'link' },
    { 'btn-outline': variant === 'outline' }
  );

  const styleClasses = classNames(
    { 'btn-lg': size === 'lg' },
    { 'btn-md': size === 'md' },
    { 'btn-sm': size === 'sm' },
    { 'btn-xs': size === 'xs' },
    { 'btn-block': block === true },
    { 'btn-wide': wide === true },
    { 'btn-responsive': responsive === true }
  );

  const shapeClasses = classNames(
    { 'btn-circle': shape === 'circle' },
    { 'btn-square': shape === 'square' }
  );

  const buttonClasses = classNames(
    baseClasses,
    colorClasses,
    variantClasses,
    styleClasses,
    shapeClasses
  );

  return (
    <Link
      href={link}
      className={buttonClasses}
      target={openInNewTab ? '_blank' : '_self'}
      title={title}
    >
      <UniformText parameterId="title" placeholder="Button text" as="span" />
    </Link>
  );
};

export default function Button(props) {
  const { title = '', link = {}, openInNewTab = false, component = {} } = props;
  const variant = component?.variant || '';
  const url = link.path?.length ? link.path : '#';

  const buttonProps = {
    ...props,
    title,
    link: url,
    openInNewTab,
    variant,
  };

  return renderButton(buttonProps);
}
