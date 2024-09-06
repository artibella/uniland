import classNames from 'classnames';
import slugify from 'slugify';
import Heading from './Heading';
import Markdown from 'react-markdown';
import { UniformRichText } from '@uniformdev/canvas-next';
import {
  isRichTextValueConsideredEmpty,
  getRichTextTagFromTableCellHeaderState,
} from '@uniformdev/richtext';

function TableCell({ node, children }) {
  const HeaderTag = getRichTextTagFromTableCellHeaderState(node.headerState);
  if (node.headerState === 1) {
    // row header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-left">
        {children}
      </HeaderTag>
    );
  } else if (node.headerState === 2) {
    // column header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-center">
        {children}
      </HeaderTag>
    );
  } else if (node.headerState === 3) {
    // row and column header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-center">
        {children}
      </HeaderTag>
    );
  } else {
    return <td>{children}</td>;
  }
}

function richTextRenderer(node) {
  if (node.type === 'tablecell') {
    return TableCell;
  }
}

export default function TextBlock({
  title = '',
  body = '',
  richText = null,
  externalRichText = null,
  textAlign = 'left',
  theme = 'light',
}) {
  const id = slugify(title);
  const hasRichText = !isRichTextValueConsideredEmpty(richText);

  const blockClasses = classNames(
    'text-block',
    { 'text-left': textAlign === 'left' },
    { 'text-center': textAlign === 'center' },
    { 'text-right': textAlign === 'right' }
  );

  const themeClasses = classNames(
    // basic theming
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  const bodyClasses = classNames(themeClasses, 'prose', 'lg:prose-xl');
  return (
    <article className={blockClasses} id={id}>
      {title && <Heading title={title} align={textAlign} theme={theme} />}

      {body && (
        <div className={bodyClasses}>
          <Markdown>{body}</Markdown>
        </div>
      )}

      {hasRichText && (
        <UniformRichText
          className={bodyClasses}
          parameterId="richText"
          placeholder="Add text..."
          resolveRichTextRenderer={richTextRenderer}
        />
      )}

      {externalRichText && (
        <div
          className={bodyClasses}
          dangerouslySetInnerHTML={{ __html: externalRichText }}
        />
      )}
    </article>
  );
}
