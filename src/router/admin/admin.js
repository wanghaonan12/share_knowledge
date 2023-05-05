export default [
  {
    path: '/ManagementView',
    name: 'ManagementView',
    redirect: '/ManagementUser',
    component: () => import('@/views/admin/management'),
    children: [
      {
        path: '/ManagementView',
        redirect: '/ManagementUser',
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
