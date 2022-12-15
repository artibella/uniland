import { Slot } from "@uniformdev/canvas-react";

export default function Linklist({ component }) {
  const links = component.slots.items;
  return (
    <div className="link-list border-y-2 border-collapse my-8">
      <Slot name="items" />
    </div>
  );
}