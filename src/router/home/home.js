export default [
  {
    path: '/',
    redirect: '/HomeView',
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import('@/views/home/home_view.vue'),
  },
  {
    path: '/ContentDetail',
    name: 'ContentDetail',
    component: () => import('@/views/home/content_detail.vue'),
    meta: { transition: 'slide-left' },
  },
]
