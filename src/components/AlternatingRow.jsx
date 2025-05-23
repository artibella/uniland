import React from 'react';
import TwoColumns from './TwoColumns';

export default function AlternatingRow({
  layout = 'split-50-50',
  leftColumnHorizontalAlignment = 'center',
  leftColumnVerticalAlignment = 'center',
  rightColumnHorizontalAlignment = 'center',
  rightColumnVerticalAlignment = 'center',
  gapSize = 'large',
  mobileReverseOrder = false,
  title = '',
}) {
  return (
    <div className="alternating-row">
      <TwoColumns
        title={title}
        layout={layout}
        leftColumnHorizontalAlignment={leftColumnHorizontalAlignment}
        leftColumnVerticalAlignment={leftColumnVerticalAlignment}
        rightColumnHorizontalAlignment={rightColumnHorizontalAlignment}
        rightColumnVerticalAlignment={rightColumnVerticalAlignment}
        gapSize={gapSize}
        mobileReverseOrder={mobileReverseOrder}
      />
    </div>
  );
}
