import { UniformSlot } from '@uniformdev/canvas-react';
import classNames from 'classnames';

const LAYOUT_SPLIT_50_50 = 'split-50-50';
const LAYOUT_SPLIT_TWO_ONE = 'split-two-one';
const LAYOUT_SPLIT_ONE_TWO = 'split-one-two';

const getColumnClasses = (horizontalAlign, verticalAlign, layout, column) => {
  const hAlign = horizontalAlign.length > 0 ? horizontalAlign : 'start';
  const vAlign = verticalAlign.length > 0 ? verticalAlign : 'start';

  return classNames(
    'mb-8 md:flex md:flex-col gap-4 md:mb-0',
    // horizontal align
    { [`md:items-${hAlign}`]: true },
    // vertical align
    { [`md:justify-${vAlign}`]: true },
    // column width
    { 'md:col-span-1': layout === LAYOUT_SPLIT_50_50 },
    { 'md:col-span-6': layout === LAYOUT_SPLIT_TWO_ONE && column === 'left' },
    { 'md:col-span-3': layout === LAYOUT_SPLIT_TWO_ONE && column === 'right' },
    { 'md:col-span-3': layout === LAYOUT_SPLIT_ONE_TWO && column === 'left' },
    { 'md:col-span-6': layout === LAYOUT_SPLIT_ONE_TWO && column === 'right' }
  );
};

// Main component

export default function TwoColumns({
  title = '',
  layout = 'split-50-50',
  leftColumnHorizontalAlignment = 'start',
  leftColumnVerticalAlignment = 'center',
  rightColumnHorizontalAlignment = 'start',
  rightColumnVerticalAlignment = 'start',
  gapSize = 'medium',
  mobileReverseOrder = false,
}) {
  const layoutClasses = classNames(
    'flex md:grid',
    // mobile direction
    { 'flex-col': mobileReverseOrder === false },
    { 'flex-col-reverse': mobileReverseOrder === true },
    // grid sizes based on layout
    { 'md:grid-cols-2': layout === LAYOUT_SPLIT_50_50 },
    { 'md:grid-cols-9': layout === LAYOUT_SPLIT_TWO_ONE },
    { 'md:grid-cols-9': layout === LAYOUT_SPLIT_ONE_TWO },
    // gap size
    { 'md:gap-4': gapSize === 'small' },
    { 'md:gap-8': gapSize === 'medium' },
    { 'md:gap-16': gapSize === 'large' },
    { 'md:gap-32': gapSize === 'xl' },
    { 'md:gap-0': gapSize === 'none' }
  );

  const leftColClasses = getColumnClasses(
    leftColumnHorizontalAlignment,
    leftColumnVerticalAlignment,
    layout,
    'left'
  );
  const rightColClasses = getColumnClasses(
    rightColumnHorizontalAlignment,
    rightColumnVerticalAlignment,
    layout,
    'right'
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-3xl',
    'text-left',
    'mb-8'
  );

  return (
    <div className="two-columns mb-16 last:mb-0">
      {title && <h3 className={headingClasses}>{title}</h3>}
      <div className={layoutClasses}>
        <div className={`column-left ${leftColClasses}`}>
          <UniformSlot name="leftContent" />
        </div>
        <div className={`column-right ${rightColClasses}`}>
          <UniformSlot name="rightContent" />
        </div>
      </div>
    </div>
  );
}
