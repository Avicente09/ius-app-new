import ThemeProvider from '@mui/system/ThemeProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/authContext';
import { iUSTheme } from './theming';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const routes = [
  {
    index: false,
    path: '/home',
    page: lazy(() => import('./pages/home')),
  },
  {
    path: 'login',
    page: lazy(() => import('./pages/login')),
  },
];

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <React.StrictMode>
        <ThemeProvider theme={iUSTheme}>
          <BrowserRouter>
            <AuthProvider value={null}>
              <Routes>
                {routes.map(({ index, path, page: Page }) => (
                  <Route
                    key={`route-${path ?? 'index'}`}
                    index={index}
                    path={path}
                    element={
                      <Suspense fallback={<Loading />}>
                        <Page />
                      </Suspense>
                    }
                  />
                ))}
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
