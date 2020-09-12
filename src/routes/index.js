import { asyncComponentLoader } from 'utils';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Welcome')),
    path: '/',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Create')),
    path: '/posts/new',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Post')),
    path: '/posts/:id',
  },
  {
    component: asyncComponentLoader(() => import('components/NotFound')),
  },
];

export default routes;
