import { lazy } from 'react';

export const USER_PROFILE = '/';
export const PRESCRIPTION_SETTINGS = '/prescription-settings';

export const routes = [
  {
    path: USER_PROFILE,
    component: lazy(() => import('../containers/home/user-profile-container')),
  },
  {
    path: PRESCRIPTION_SETTINGS,
    component: lazy(
      () => import('../containers/home/prescription-setting-container')
    ),
  },
];
