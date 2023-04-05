export default [
  {
    path: '/ManagementView',
    name: 'ManagementView',
    component: () => import('@/views/admin/management'),
    children: [
      {
        path: '/',
        redirect: '/TagView',
      },
      {
        path: '/TagView',
        name: 'TagView',
        component: () => import('@/views/admin/tag_view'),
      },
      {
        path: '/ManagementUser',
        name: 'ManagementUser',
        component: () => import('@/views/admin/management_user'),
      },
    ],
  },
]
