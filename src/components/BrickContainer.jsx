import { Slot } from '@uniformdev/canvas-react';
import Brick from './Brick';

export default function BrickContainer(props) {
  return (
    <Brick {...props}>
      <Slot name="content" emptyPlaceholder={null} />
    </Brick>
  );
}
