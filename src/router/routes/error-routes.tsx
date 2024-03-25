import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { CircleLoading } from '@/components/loading';
import ErrorLayout from '@/layouts/error-layout'

import AuthGuard from '../components/auth-guard';

import { AppRouteObject } from '#/router';

const Page403 = lazy(() => import('@/pages/error/Page403'));
const Page404 = lazy(() => import('@/pages/error/Page404'));
const Page500 = lazy(() => import('@/pages/error/Page500'));

/**
 * error routes
 * 403, 404, 500
 */
const ErrorRoutes: AppRouteObject = {
  element: (
    <AuthGuard>
      <ErrorLayout>
        <Suspense fallback={<CircleLoading />}>
          <Outlet />
        </Suspense>
        </ErrorLayout>
    </AuthGuard>
  ),
  children: [
    { path: '403', element: <Page403 /> },
    { path: '404', element: <Page404 /> },
    { path: '500', element: <Page500 /> },
  ],
};
export default  ErrorRoutes;