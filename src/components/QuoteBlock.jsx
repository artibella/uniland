import classNames from 'classnames';
import slugify from 'slugify';

export default function QuoteBlock({
  title = '',
  quote = '',
  author = '',
  source = '',
  theme = 'light',
  children,
}) {
  const id = slugify(title);
  const blockClasses = classNames(
    'quote',
    { ['bg-aqua-900']: theme === 'dark' },
    { 'bg-green-50': theme === 'spring' },
    { 'bg-mango-400': theme === 'mango' },
    { 'bg-ice-50': theme === 'ice' }
  );

  const quoteClasses = classNames(
    'font-bold',
    'font-serif',
    'text-4xl',
    'text-left',
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-2xl',
    'mb-8'
  );

  return (
    <figure data-theme={theme} className={blockClasses} id={id}>
      {title && <h3 className={headingClasses}>{title}</h3>}

      <blockquote
        className={(quoteClasses = '')}
        dangerouslySetInnerHTML={{ __html: quote }}
      ></blockquote>
      <figcaption className="font-sans text-xl my-4">
        {(author || source) && <span>&mdash;</span>}
        {author && <span>{author}</span>}
        {source && (
          <>
            , <cite>{source}</cite>
          </>
        )}
      </figcaption>
    </figure>
  );
}
