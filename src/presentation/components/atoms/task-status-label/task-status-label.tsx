import Typography from '@mui/material/Typography';

import type { TaskStatusLabelProps } from './task-status-label.types';

const statusLabels = {
  pending: 'PENDIENTE',
  done: 'HECHO',
} as const;

export function TaskStatusLabel({ status }: TaskStatusLabelProps): JSX.Element {
  return (
    <Typography
      fontSize="small"
      sx={{
        color: theme => theme.colors.white,
        backgroundColor: theme => theme.grayShades[600],
        borderRadius: theme => theme.borderRadius.large,
        padding: theme => theme.spacing(1),
      }}
    >
      {statusLabels[status]}
    </Typography>
  );
}
