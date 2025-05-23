import React from 'react';
import { UniformSlot } from '@uniformdev/canvas-react';
import classNames from 'classnames';

export default function AlternatingRows({
  title = '',
  verticalSpacing = 'large',
}) {
  const containerClasses = classNames(
    'alternating-rows',
    // vertical spacing between rows
    { 'space-y-8': verticalSpacing === 'small' },
    { 'space-y-16': verticalSpacing === 'medium' },
    { 'space-y-24': verticalSpacing === 'large' },
    { 'space-y-32': verticalSpacing === 'xl' }
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-4xl',
    'text-center',
    'mb-16'
  );

  return (
    <div className={containerClasses}>
      {title && <h2 className={headingClasses}>{title}</h2>}

      <div className="alternating-rows-content">
        <UniformSlot name="rows" />
      </div>
    </div>
  );
}
