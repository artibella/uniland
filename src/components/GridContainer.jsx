import { UniformSlot } from '@uniformdev/canvas-react';
import Grid from './Grid';

export default function GridContainer({ columns = 1 }) {
  return (
    <Grid columns={columns}>
      <UniformSlot name="items" />
    </Grid>
  );
}
