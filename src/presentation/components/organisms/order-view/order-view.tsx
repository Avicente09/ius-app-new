import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TaskView } from '@presentation/components/molecules';

import type { OrderViewProps } from './order-view.types';

export function OrderView({
  order,
  onEdit,
  onPlacement,
  onRemoveTask,
}: OrderViewProps): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.colors.white,
        padding: theme => theme.spacing(4),
        border: theme => `1px solid ${theme.grayShades[200]}`,
      }}
    >
      <Typography mb={theme => theme.spacing(4)}>
        Detalle de la orden:
      </Typography>
      {order?.tasks?.map(task => (
        <Box key={`task-view-${task.id}`} mb={theme => theme.spacing(4)}>
          <TaskView
            mainTaskId={task.id}
            order={order}
            onRemove={onRemoveTask}
          />
        </Box>
      ))}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained" onClick={onEdit}>
          Agregar Tareas
        </Button>
        <Button variant="contained" onClick={onPlacement}>
          Enviar Orden
        </Button>
      </Box>
    </Box>
  );
}
