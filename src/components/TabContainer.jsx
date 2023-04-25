import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { UniformSlot } from '@uniformdev/canvas-react';

const renderTabList = function (tabs) {
  return tabs.map(tab => {
    const title = tab.parameters?.title?.value || '';
    return (
      <Tab as={Fragment} key={title}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'p-2 border-b-mango-2' : 'border-b-transparent-2'
            }
          >
            {title}
          </button>
        )}
      </Tab>
    );
  });
};

export default function TabContainer({ component }) {
  const tabs = component.slots?.tabs || [];

  return (
    <div className="tab-container">
      {tabs.length ? (
        <Tab.Group>
          <Tab.List className="flex flex-row items-center justify-items-center gap-4 space-x-1 p-1 border-b-2">
            {renderTabList(tabs)}
          </Tab.List>
          <Tab.Panels>
            <UniformSlot name="tabs" />
          </Tab.Panels>
        </Tab.Group>
      ) : null}
    </div>
  );
}
