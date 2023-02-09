import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Login } from './pages';
import Box from '@mui/material/Box';
import { Home } from './pages';
import { AuthProvider } from './context/authContext';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <React.StrictMode>
        <BrowserRouter>
          <AuthProvider value={null}>
            <Box>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Box>
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
