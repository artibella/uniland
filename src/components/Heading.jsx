import classNames from 'classnames';
import slugify from 'slugify';
import { UniformText, UniformRichTextNode } from '@uniformdev/canvas-react';
import { UniformRichText } from '@uniformdev/canvas-next';

function TitleRichTextNode({ node, children }) {
  return <span>{children}</span>;
}

function resolveTitleRichTextRenderer(node) {
  if (node.type === 'paragraph') {
    return TitleRichTextNode;
  }
}

export default function Heading({
  title = '',
  titleHtml = '',
  titleRichText = '',
  byline = '',
  align = 'left',
  tagName = 'h3',
  theme = 'light',
}) {
  const id = slugify(title);

  const baseHeadingClasses = classNames(
    'font-bold',
    { 'font-serif': tagName.match(/h[1-3]/) },
    'tracking-tight',
    // text alignment
    { 'text-left': align === 'left' },
    { 'text-center': align === 'center' },
    { 'text-right': align === 'right' },
    // basic theming
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  const headingClasses = classNames(
    baseHeadingClasses,
    { 'text-4xl md:text-7xl': tagName === 'h1' },
    { 'text-3xl md:text-6xl': tagName === 'h2' },
    { 'text-3xl md:text-4xl': tagName === 'h3' },
    { 'text-3xl': tagName === 'h4' },
    { 'text-2xl': tagName === 'h5' },
    { 'text-xl': tagName === 'h6' },
    { 'mb-8 md:mb-16': tagName === 'h1' },
    { 'mb-8': tagName === 'h2' },
    { 'mb-8': tagName === 'h3' },
    { 'mb-4': tagName === 'h4' },
    { 'mb-2': tagName === 'h5' },
    { 'mb-2': tagName === 'h6' }
  );

  const bylineClasses = classNames(
    baseHeadingClasses,
    'block',
    { 'text-xl md:text-4xl': tagName === 'h1' },
    { 'text-xl md:text-3xl': tagName === 'h2' },
    { 'text-xl': tagName === 'h3' },
    { 'text-xl': tagName === 'h4' },
    { 'text-base': tagName === 'h5' },
    { 'text-sm': tagName === 'h6' },
    { 'mb-2 md:mb-4': tagName === 'h1' },
    { 'mb-2 md:mb-4': tagName === 'h2' },
    { 'mb-2': tagName === 'h3' },
    { 'mb-2': tagName === 'h4' },
    { 'mb-0': tagName === 'h5' },
    { 'mb-0': tagName === 'h6' },
    'mb-4'
  );

  const HeaderTag = `${tagName}`;
  const hasTitle = title.length || titleHtml.length;
  const hasHtmlTitle = titleHtml.length;

  return (
    <>
      {hasTitle && (
        <header id={id}>
          {byline && (
            <UniformText
              parameterId="byline"
              as="span"
              className={bylineClasses}
              placeholder=" "
            />
          )}
          {titleRichText ? (
            <UniformRichText
              className={headingClasses}
              as={tagName}
              parameterId="titleRichText"
              resolveRichTextRenderer={resolveTitleRichTextRenderer}
            />
          ) : (
            <UniformText
              as={tagName}
              parameterId="title"
              className={headingClasses}
            />
          )}
        </header>
      )}
    </>
  );
}
