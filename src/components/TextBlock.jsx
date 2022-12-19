import classNames from 'classnames';
import slugify from 'slugify';

export default function TextBlock({
  title = '',
  body = '',
  textAlign = 'left',
}) {
  const id = slugify(title);
  const blockClasses = classNames('text-block', {
    [`text-${textAlign}`]: true,
  });

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-2xl',
    'mb-8'
  );

  return (
    <article className={blockClasses} id={id}>
      {title && <h3 className={headingClasses}>{title}</h3>}
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </article>
  );
}
