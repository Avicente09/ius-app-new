import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { MainMenuOptionButton } from '../../molecules';

const options = [
  {
    text: 'COMPRA',
    path: '/purchase', //TODO: Define actual path
  },
  {
    text: 'MANDADITO',
    path: '/errand', //TODO: Define actual path
  },
  {
    text: 'COMIDA',
    path: '/food', //TODO: Define actual path
  },
  {
    text: 'PAQUETERIA',
    path: '/package', //TODO: Define actual path
  },
];

const StyledMainContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;

  > button {
    margin-bottom: ${theme.spacing(5)};
    
    :last-of-type {
      margin-bottom: 0;
    }
  }
`
);

export function MainMenu(): JSX.Element {
  const navigate = useNavigate();

  return (
    <StyledMainContainer>
      {options.map((option, index) => (
        <MainMenuOptionButton
          key={`menu-option-${index}`}
          text={option.text}
          onClick={() => navigate(option.path)}
        />
      ))}
    </StyledMainContainer>
  );
}
