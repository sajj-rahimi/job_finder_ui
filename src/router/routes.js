
const routes = [
  {
    name:'home',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',component: () => import('pages/Index.vue') },
      { path: 'login', name:'login', component: () => import('pages/Login.vue') },
      // { path: 'advertisements', name:'advertisements', component: () => import('pages/advertisements.vue') },
      // { path: 'advertisement', name:'advertisement', component: () => import('pages/advertisement.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
