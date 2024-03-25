import { lazy } from 'react';
import { Navigate, RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';

import DashboardLayout from '@/layouts';
import AuthGuard from '@/router/components/auth-guard';
import ErrorRoutes from './routes/error-routes'
import { usePermissionRoutes } from '@/router/hooks';
import { AppRouteObject } from '#/router';


const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
const LoginRoute: AppRouteObject = {
  path: '/login',
  Component: lazy(() => import('@/pages/login/Login')),
};
const PAGE_NOT_FOUND_ROUTE: AppRouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

export default function Router() {
  const permissionRoutes = usePermissionRoutes();
  const asyncRoutes: AppRouteObject = {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }, ...permissionRoutes],
  };

  const routes = [LoginRoute, asyncRoutes, PAGE_NOT_FOUND_ROUTE,ErrorRoutes];

  const router = createHashRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
