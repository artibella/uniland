import { Tab } from '@headlessui/react';
import { UniformSlot } from '@uniformdev/canvas-react';

export default function TabPanel({ title = '' }) {
  return (
    <Tab.Panel key={title} className="">
      <UniformSlot name="content" />
    </Tab.Panel>
  );
}
