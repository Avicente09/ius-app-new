import Typography from '@mui/material/Typography';

import type { TaskTypeLabelProps } from './task-type-label.types';

const typeLabels = {
  pickUp: 'RECOGER',
  deliver: 'ENTREGAR',
  paymentRetrieval: 'ENTREGA DE PAGO',
} as const;

export function TaskTypeLabel({ type }: TaskTypeLabelProps): JSX.Element {
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
      {typeLabels[type]}
    </Typography>
  );
}
