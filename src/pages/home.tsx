import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components';
import { Navbar } from '../components';
import { Content } from '../components';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useAuth } from '../hooks';

export const Home = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  return (
    <Box>
      <Header></Header>
      <Stack direction="row" justifyContent="space-between">
        <Navbar></Navbar>
        <Content>
          <div>Content</div>
        </Content>
      </Stack>
      <Footer></Footer>
    </Box>
  );
};
