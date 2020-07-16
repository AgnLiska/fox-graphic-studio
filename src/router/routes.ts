import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: (): Promise<typeof import('*.vue')> =>
      import('layouts/Webpage.vue'),
    children: [
      {
        path: '',
        component: (): Promise<typeof import('*.vue')> =>
          import('pages/Home.vue')
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
