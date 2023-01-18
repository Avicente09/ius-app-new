import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { Navbar } from './components/layout/navbar';
import { Content } from './components/layout/content'
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <Header></Header>
      <Stack direction="row" justifyContent="space-between">
        <Navbar></Navbar>
        <Content></Content>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default App;
