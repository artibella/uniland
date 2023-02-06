import { UniformSlot } from '@uniformdev/canvas-react';
import Section from './Section';

export default function SectionContainer({ title, theme }) {
  return (
    <Section title={title} theme={theme}>
      <UniformSlot name="content" emptyPlaceholder={null} />
    </Section>
  );
}
