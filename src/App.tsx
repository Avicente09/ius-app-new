import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { Navbar } from './components/layout/navbar';
import { Content } from './components/layout/content';
import { Login } from './components/login';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <Header></Header>
      <Stack direction="row" justifyContent="space-between">
        <Navbar></Navbar>
        <Content>
          <Login />
        </Content>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default App;
