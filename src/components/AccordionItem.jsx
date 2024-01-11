import { useEffect, useState } from 'react';

import { Accordion } from 'react-daisyui';
import {
  useUniformContextualEditingState,
  UniformSlot,
} from '@uniformdev/canvas-react';

export default function AccordionItem({
  title = '',
  icon = 'arrow',
  isActive = false,
}) {
  const { selectedComponentReference } = useUniformContextualEditingState();

  // set default open component
  const [isSelected, setSelected] = useState(isActive);

  useEffect(() => {
    if (typeof selectedComponentReference?.componentIndex !== 'number') {
      return;
    }

    setSelected(true);
  }, [selectedComponentReference]);

  return (
    <Accordion icon={icon} defaultChecked={isSelected}>
      <Accordion.Title className="text-xl font-bold border-b-2 border-aqua-900">{title}</Accordion.Title>
      <Accordion.Content className='border-b-2 border-aqua-900'>
        <div className="mt-4">
          <UniformSlot name="content" />
        </div>
      </Accordion.Content>
    </Accordion>
  );
}
