import { Slot } from '@uniformdev/canvas-react';
import Section from './Section';

export default function SectionContainer({ title, theme }) {
  return (
    <Section title={title} theme={theme}>
      <Slot name="content" emptyPlaceholder={null} />
    </Section>
  );
}
