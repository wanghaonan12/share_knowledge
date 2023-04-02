export default [
  {
    path: '/MineView',
    name: 'MineView',
    component: () => import('@/views/mine/mine_view'),
  },
  {
    path: '/RechangeRecord',
    name: 'RechangeRecord',
    component: () => import('@/views/mine/recharge_record'),
  },
  {
    path: '/PraisHistory',
    name: 'PraisHistory',
    component: () => import('@/views/mine/prais_view'),
  },
  {
    path: '/HistoryView',
    name: 'HistoryView',
    component: () => import('@/views/mine/history_view'),
  },
  {
    path: '/MyCreate',
    name: 'MyCreate',
    component: () => import('@/views/mine/my_create'),
  },
]
