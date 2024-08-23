import classNames from 'classnames';

export default function Grid({ columns = 1, isResponsive = true, children }) {
  const gridClasses = classNames(
    'grid-content',
    'grid',
    'md:grid-gap-4',
    'gap-4',
    { [`grid-cols-${columns}`]: isResponsive === false }
  );

  const responsiveClasses = classNames(
    { [`lg:grid-cols-${columns}`]: isResponsive === true },
    { 'md:grid-cols-2': isResponsive === true }
  );

  const containerClasses = classNames(gridClasses, responsiveClasses);

  return (
    <div className="grid-container">
      <div className={containerClasses}>{children}</div>
    </div>
  );
}
