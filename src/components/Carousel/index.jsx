import { Fragment, useEffect, useState } from 'react';
import {
  UniformSlot,
  useUniformContextualEditingState,
} from '@uniformdev/canvas-react';
import EmblaCarousel from './EmblaCarousel';

function CarouselWrapperComponent({ items }) {
  return (
    <div className="embla__container">
      {items.map((item, index) => (
        <div className="embla__slide" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Carousel({
  images = [],
  loop = false,
  autoPlay = false,
  component,
}) {
  const options = { loop };
  return (
    <EmblaCarousel options={options}>
      <UniformSlot name="slides" wrapperComponent={CarouselWrapperComponent} />
    </EmblaCarousel>
  );
}
