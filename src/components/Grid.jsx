import classNames from "classnames";

export default function Grid({ columns = 2, children }) {
  const gridClasses = classNames(
    'grid-content', 'md:grid', 'md:grid-gap-4', 'md:grid-cols-2', 'gap-4', 
    {[`lg:grid-cols-${columns}`] : true}
  );

  return (
    <div className='grid-container'>
      <div className={gridClasses}>
        {children}
      </div>
    </div>
  )
}
