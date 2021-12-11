import { Navigate, Outlet } from 'react-router-dom';

import { APP_PATHS } from 'app/contants';

function ProtectedRoutes() {
  const user = null;

  if (!user) {
    return <Navigate to={APP_PATHS.LOGIN} />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
