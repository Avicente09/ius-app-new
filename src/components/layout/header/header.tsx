import { AppBar, Box, styled, Toolbar, Typography, Container, Badge, IconButton } from '@mui/material';
import { AccountCircle, Notifications, Menu } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Box sx={{display: "flex"}}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }}} />
            <Menu sx={{ display: { xs: 'flex', md: 'none' }}} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>
          <Box>
            <Badge badgeContent={4} color="error">
              <Notifications color="action" />
            </Badge>
            <IconButton
                size="large"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
export default Header;