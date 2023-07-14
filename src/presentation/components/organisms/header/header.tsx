import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { AppBar } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useAuth } from '@presentation/hooks/use-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
});

export const Header = () => {
  const { logout } = useAuth();
  const { order } = useCurrentOrder();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleShoppingCartClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    handleClose();
    navigate('/summary');
  };

  return (
    <AppBar position="static" data-testid="app-bar">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Box ml="auto">
            <IconButton
              size="large"
              color="inherit"
              onClick={handleShoppingCartClick}
              data-testid="shopping-cart-button"
            >
              <Badge badgeContent={order?.tasks.length} color="error">
                <ShoppingCart color="secondary" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleProfileClick}
              data-testid="profile-button"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorEl}
              onClose={handleClose}
            >
              <MenuItem>Perfil</MenuItem>
              <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
