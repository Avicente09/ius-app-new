import Box from '@mui/material/Box';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/authContext';
import { Login } from './pages';
import { Home } from './pages';

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
