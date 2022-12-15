import { Tab } from '@headlessui/react'
import { Slot } from '@uniformdev/canvas-react';


export default function TabPanel({ title = '' }) {
  
    return (
    <Tab.Panel
        key={title}
        className= 'rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
    >
      <Slot name='content' emptyPlaceholder={null} />
    </Tab.Panel>
 )
}