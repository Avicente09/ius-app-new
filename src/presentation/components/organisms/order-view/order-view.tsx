import Box from '@mui/material/Box';
import { TaskView } from '@presentation/components/molecules';

import type { OrderViewProps } from './order-view.types';

export function OrderView({ order }: OrderViewProps): JSX.Element {
  // TODO: Implement real order view
  return (
    <Box
      sx={{
        backgroundColor: 'white',
      }}
    >
      OrderView: {order?.id}
      <br />
      <br />
      {order?.tasks?.map(task => (
        <TaskView task={task} />
      ))}
    </Box>
  );
}
