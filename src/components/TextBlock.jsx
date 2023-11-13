import classNames from 'classnames';
import slugify from 'slugify';
import Heading from './Heading';
import Markdown from 'react-markdown';
import { UniformRichText } from '@uniformdev/canvas-next';

export default function TextBlock({
  title = '',
  body = '',
  richText = null,
  externalRichText = null,
  textAlign = 'left',
  theme = 'light',
}) {
  const id = slugify(title);

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

      <UniformRichText className={bodyClasses} parameterId="richText" />

      {externalRichText && (
        <div
          className={bodyClasses}
          dangerouslySetInnerHTML={{ __html: externalRichText }}
        />
      )}
    </article>
  );
}
