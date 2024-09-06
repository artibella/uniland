import classNames from 'classnames';
import slugify from 'slugify';
import Heading from './Heading';
import Markdown from 'react-markdown';
import { UniformRichText } from '@uniformdev/canvas-next';
import {
  isRichTextValueConsideredEmpty,
  getRichTextTagFromTableCellHeaderState,
} from '@uniformdev/richtext';
import TableCell from '../lib/helpers/richtext/TableCell';

function resolveRichTextRenderer(node) {
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
          resolveRichTextRenderer={resolveRichTextRenderer}
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
