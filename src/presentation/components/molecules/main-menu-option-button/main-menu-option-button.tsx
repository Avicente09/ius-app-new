import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { MainMenuOptionButtonProps } from './main-menu-option-button.types';

export function MainMenuOptionButton({
  text,
  onClick,
}: MainMenuOptionButtonProps): JSX.Element {
  return (
    <Button
      onClick={onClick}
      sx={theme => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3, 9),
        borderRadius: theme.borderRadius.large,
      })}
    >
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
}
