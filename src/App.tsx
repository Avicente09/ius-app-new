import { AuthProvider } from '@presentation/context';
import { AppThemeProvider, iUSTheme } from '@presentation/theming';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  {
    index: false,
    path: '/package',
    page: lazy(() => import('./pages/package')),
  },
];

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <React.StrictMode>
        <AppThemeProvider theme={iUSTheme}>
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
        </AppThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
