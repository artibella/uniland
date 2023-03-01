import classNames from 'classnames';
import slugify from 'slugify';

export default function Section({ title, theme = 'light', children }) {
  const sectionClasses = classNames(
    'section',
    'py-8',
    'lg:py-16',
    { ['bg-aqua-900']: theme === 'dark' },
    { 'bg-green-50': theme === 'spring' },
    { 'bg-mango-400': theme === 'mango' },
    { 'bg-ice-50': theme === 'ice' }
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-4xl',
    'text-left',
    'mb-16',
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  return (
    <section data-theme={theme} className={sectionClasses}>
      <div className="container mx-auto">
        <div className="px-4 md:px-8">
          {title && title}
          <div className="section-content">{children}</div>
        </div>
      </div>
    </section>
  );
}
