export default [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import('@/views/home/home_view.vue'),
  },
  {
    path: '/',
    redirect: '/HomeView',
  },
]
