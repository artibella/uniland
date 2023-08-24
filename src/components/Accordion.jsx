import { Fragment, useEffect, useState } from 'react';
import { AccordionItem } from './AccordionItem';
import {
  UniformSlot,
  useUniformContextualEditingState,
} from '@uniformdev/canvas-react';

export default function Accordion({ component }) {
  const items = component.slots?.items || [];
  const { selectedComponentReference } = useUniformContextualEditingState();

  // // set default open component
  // const defaultIndexFromSlots = items.findIndex(findSelectedAccordionIndex);
  // const defaultIndex = defaultIndexFromSlots >= 0 ? defaultIndexFromSlots : 0;
  // const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  // useEffect(() => {
  //   if (typeof selectedComponentReference?.componentIndex !== 'number') {
  //     return;
  //   }

  //   setSelectedIndex(selectedComponentReference.componentIndex);
  // }, [selectedComponentReference]);

  return (
    <div className="accordion-container">
      {items.length ? <UniformSlot name="items" /> : null}
    </div>
  );
}
