import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TaskTypeLabel } from '@presentation/components/atoms';

import { getChildren, isChild } from './lib';
import type { TaskViewProps } from './task-view.types';

function DummyAddressLocationView(): JSX.Element {
  /* TODO: Implement a component to see the address/location */
  return <Typography>Some Direction from the task element</Typography>;
}

const StyledCloseButton = styled('button')(
  ({ theme }) => `
  background-color: transparent;
  border: none;
  padding: ${theme.spacing(1)};
  color: ${theme.palette.primary.main};
  border-radius: ${theme.borderRadius.medium};

  :hover {
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.primary.contrastText};
  }
`
);

export function TaskView({
  mainTaskId,
  order,
  onRemove,
}: TaskViewProps): JSX.Element {
  const mainTask = order.tasks.find(task => task.id === mainTaskId);
  if (!mainTask) {
    return <></>;
  }

  if (isChild(mainTaskId, order)) {
    return <></>;
  }

  const children = getChildren(mainTaskId, order);

  return (
    <Box
      sx={{
        border: theme => `5px solid ${theme.grayShades[200]}`,
        borderRadius: theme => theme.borderRadius.medium,
        padding: theme => theme.spacing(2),
        display: 'flex',
      }}
    >
      <Box flex="1">
        {children &&
          children.map(child => (
            <Box key={`task-child-${child.id}`} mb={theme => theme.spacing(4)}>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <TaskTypeLabel type={child.type} />
                <Typography marginLeft={theme => theme.spacing(1)}>
                  {child.instruction}
                </Typography>
              </Box>
              <DummyAddressLocationView />
              <Divider />
            </Box>
          ))}
        <Box
          sx={{
            backgroundColor: theme => theme.grayShades[200],
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <TaskTypeLabel type={mainTask.type} />
            <Typography marginLeft={theme => theme.spacing(1)}>
              {mainTask.instruction}
            </Typography>
          </Box>
          <DummyAddressLocationView />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StyledCloseButton
          onClick={() => onRemove(mainTaskId)}
          data-testid={`remove-task-${mainTaskId}-button`}
        >
          <RemoveCircleOutlineIcon fontSize="large" />
        </StyledCloseButton>
      </Box>
    </Box>
  );
}
