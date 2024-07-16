import { IS_RENDERED_BY_UNIFORM_ATTRIBUTE } from '@uniformdev/canvas';
import { useState } from 'react';
import classNames from 'classnames';

const backgroundDecoratorOptions = {
  Default: 'default',
  Dark: 'dark',
  Spring: 'spring',
  Mango: 'mango',
  Ice: 'ice',
};

const getBackgroundClassesByTheme = theme => {
  return classNames(
    { 'bg-aqua-900': theme === 'dark' },
    { 'bg-green-50': theme === 'spring' },
    { 'bg-mango-400': theme === 'mango' },
    { 'bg-ice-50': theme === 'ice' },
    { 'bg-white bg-canvas-grid': theme === 'default' }
  );
};

const getButtonClassesByTheme = theme =>
  classNames(
    getBackgroundClassesByTheme(theme),
    'playground-theme-button',
    'p-2',
    'h-8',
    'border',
    { 'text-white': theme === 'dark' },
    'border-solid rounded-lg'
  );

export const BackgroundDecorator = ({ data, children }) => {
  const [selectedTheme, setSelectedTheme] = useState('Default');

  const backgroundClasses = getBackgroundClassesByTheme(selectedTheme);

  const containerClasses = classNames(
    'playground-container',
    backgroundClasses
  );

  const PAGE_TYPES = ['page'];
  const isCompositionPattern = PAGE_TYPES.includes(data.type);
  if (isCompositionPattern) return <>{children}</>;

  return (
    <div className={containerClasses}>
      <div
        className="playground-controls bg-gray-100 grid grid-rows md:grid-cols-5 gap-8 p-4"
        {...{ [IS_RENDERED_BY_UNIFORM_ATTRIBUTE]: true }}
      >
        {Object.entries(backgroundDecoratorOptions).map(([name, theme]) => (
          <button
            key={name}
            onClick={() => setSelectedTheme(theme)}
            className={classNames(getButtonClassesByTheme(theme), {
              'font-bold': theme === selectedTheme,
            })}
            title={name}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="">{children}</div>
    </div>
  );
};
