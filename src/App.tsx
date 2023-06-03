import { OrderProvider } from '@implementation/context/order';
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
  {
    index: false,
    path: '/food',
    page: lazy(() => import('./pages/food')),
  },
  {
    index: false,
    path: '/purchase',
    page: lazy(() => import('./pages/purchase')),
  },
  {
    index: false,
    path: '/little-errands',
    page: lazy(() => import('./pages/little-errands')),
  },
  {
    index: false,
    path: '/summary',
    page: lazy(() => import('./pages/summary')),
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
              <OrderProvider>
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
              </OrderProvider>
            </AuthProvider>
          </BrowserRouter>
        </AppThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
