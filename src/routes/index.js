import { asyncComponentLoader } from 'utils';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Welcome')),
    path: '/',
  },
  {
    component: asyncComponentLoader(() => import('components/NotFound')),
  },
];

export default routes;
