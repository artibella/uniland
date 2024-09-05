import classNames from 'classnames';
import slugify from 'slugify';
import Heading from './Heading';
import Markdown from 'react-markdown';
import { UniformRichText, UniformRichTextNode } from '@uniformdev/canvas-next';
import { isRichTextValueConsideredEmpty } from '@uniformdev/richtext';

function TableCell({ node, children }) {
  if (node.headerState === 1) {
    return <th className="bg-gray-100 font-bold text-left">{children}</th>;
  } else if (node.headerState === 2) {
    return <th className="bg-gray-100 font-bold text-center">{children}</th>;
  } else if (node.headerState === 3) {
    return <th className="bg-gray-100 font-bold text-center">{children}</th>;
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
