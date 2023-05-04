import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { MainMenuOptionButtonProps } from './main-menu-option-button.types';

export function MainMenuOptionButton({
  text,
  onClick,
}: MainMenuOptionButtonProps): JSX.Element {
  return (
    <Button onClick={onClick}>
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
}
