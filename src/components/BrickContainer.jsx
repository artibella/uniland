import { UniformSlot } from '@uniformdev/canvas-react';
import Brick from './Brick';

export default function BrickContainer(props) {
  return (
    <Brick {...props}>
      <UniformSlot name="content" />
    </Brick>
  );
}
