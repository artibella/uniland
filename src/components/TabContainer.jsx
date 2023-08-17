import { Fragment, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  UniformSlot,
  useUniformContextualEditingState,
} from '@uniformdev/canvas-react';

const renderTabList = function (tabs) {
  return tabs.map(tab => {
    const title = tab.parameters?.title?.value || '';
    return (
      <Tab as={Fragment} key={title}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected
                ? 'tab tab-lg tab-lifted tab-active font-bold focus:outline-none'
                : 'tab tab-lg tab-lifted focus:outline-none'
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
  const { selectedComponentReference } = useUniformContextualEditingState();

  const findSelectedTabIndex = element => {
    return element.parameters?.isActive?.value === true;
  };
  const defaultIndexFromTabs = tabs.findIndex(findSelectedTabIndex);
  const defaultIndex = defaultIndexFromTabs >= 0 ? defaultIndexFromTabs : 0;

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  useEffect(() => {
    if (typeof selectedComponentReference?.componentIndex !== 'number') {
      return;
    }

    setSelectedIndex(selectedComponentReference.componentIndex);
  }, [selectedComponentReference]);

  return (
    <div className="tab-container">
      {tabs.length ? (
        <Tab.Group
          defaultIndex={defaultIndex}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="tabs z-10 -mb-px">
            <>
              {renderTabList(tabs)}
              <div class="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]"></div>
            </>
          </Tab.List>
          <Tab.Panels className="border-base-300 bg-base-100 flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover p-16">
            <UniformSlot name="tabs" />
          </Tab.Panels>
        </Tab.Group>
      ) : null}
    </div>
  );
}
