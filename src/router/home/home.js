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
    path: '/ContentDetial',
    name: 'ContentDetial',
    component: () => import('@/views/home/content_detail.vue'),
    meta: { transition: 'slide-left' },
  },
]
