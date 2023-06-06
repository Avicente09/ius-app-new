import { styled } from '@mui/material/styles';

export const Form = styled('form')(
  ({ theme }) => `
  background-color: ${theme.colors.white};
  padding: ${theme.spacing(4)};
  border: 1px solid ${theme.grayShades[200]};
`
);
