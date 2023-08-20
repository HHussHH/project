import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  const [t] = useTranslation();
  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }) => (
                  <Route
                    path={path}
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                        )}
                  />
              ))}
          </Routes>
      </Suspense>
  );
}
