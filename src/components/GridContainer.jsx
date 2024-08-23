import { UniformSlot } from '@uniformdev/canvas-react';
import Grid from './Grid';

export default function GridContainer({
  columns = 1,
  customResponsive = false,
}) {
  return (
    <Grid columns={columns} isResponsive={!customResponsive}>
      <UniformSlot name="items" />
    </Grid>
  );
}
