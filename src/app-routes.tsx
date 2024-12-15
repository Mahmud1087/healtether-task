import { Route, Routes } from 'react-router-dom';
import { routes } from './config';
import { AppContainer } from './containers';
import { Suspense } from 'react';

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <AppContainer>
              {
                <Suspense fallback={<p>Loading...</p>}>
                  {<route.component />}
                </Suspense>
              }
            </AppContainer>
          }
        />
      ))}
      <Route path='*' element={<p>404: Page not found</p>} />
    </Routes>
  );
};
export default AppRoutes;
