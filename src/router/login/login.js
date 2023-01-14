export default [
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import('@/views/login/login_view'),
    children: [
      {
        path: '/LoginView',
        redirect: '/PasswordLogin',
      },
      {
        path: '/PasswordLogin',
        name: 'PasswordLogin',
        component: () => import('@/views/login/password_login'),
      },
      {
        path: '/ForgetView',
        name: 'ForgetView',
        component: () => import('@/views/login/forget_password'),
      },
      {
        path: '/RegisterView',
        name: 'RegisterView',
        component: () => import('@/views/login/register_view'),
      },
    ],
  },
]
