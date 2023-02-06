
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages';
import Box from '@mui/material/Box';
import { Home }  from './pages';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider value={null}>
      <Box>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Box>
      
    </AuthProvider>
    
  );
}

export default App;
