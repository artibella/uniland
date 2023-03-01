import { UniformSlot } from '@uniformdev/canvas-react';
import Section from './Section';
import Heading from './Heading';

export default function SectionContainer({ title, theme, component }) {
  const hasHeadingComponent = component.slots.heading?.length ? true : false;
  const titleComponent = hasHeadingComponent ? (
    <UniformSlot name="heading" emptyPlaceholder={null} />
  ) : null;

  return (
    <Section title={titleComponent} theme={theme}>
      <UniformSlot name="content" emptyPlaceholder={null} />
    </Section>
  );
}
