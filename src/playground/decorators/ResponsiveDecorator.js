import { IS_RENDERED_BY_UNIFORM_ATTRIBUTE } from '@uniformdev/canvas';
import { useState } from 'react';
import classNames from 'classnames';

const viewportOptions = {
  Full: 'full',
  '1/2': '1/2',
  '1/3': '1/3',
  '1/4': '1/4',
  '1/5': '1/5',
  '1/6': '1/6',
};

const getClassesBySize = size => {
  return classNames(
    { 'w-full': size === 'full' },
    { 'w-1/2': size === '1/2' },
    { 'w-1/3': size === '1/3' },
    { 'w-1/4': size === '1/4' },
    { 'w-1/5': size === '1/5' },
    { 'w-1/6': size === '1/6' }
  );
};

const buttonClasses = classNames(
  'playground-size-button',
  'p-2',
  'h-8',
  'border',
  'border-solid rounded-lg'
);

export const ResponsiveDecorator = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState('full');

  const sizeClasses = getClassesBySize(selectedSize);

  const containerClasses = classNames('playground-container');

  return (
    <div className={containerClasses}>
      <div
        className="playground-controls bg-gray-100 grid grid-rows md:grid-cols-6 gap-8 p-4 mb-4"
        {...{ [IS_RENDERED_BY_UNIFORM_ATTRIBUTE]: true }}
      >
        {Object.entries(viewportOptions).map(([name, size]) => (
          <button
            key={name}
            onClick={() => setSelectedSize(size)}
            className={classNames(buttonClasses, {
              'font-bold': size === selectedSize,
            })}
            title={name}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className={sizeClasses}>{children}</div>
      </div>
    </div>
  );
};
