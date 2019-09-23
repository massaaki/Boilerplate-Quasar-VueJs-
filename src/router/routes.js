//Layouts
import LayoutDefault from 'layouts/Default.vue'
import LayoutDashboard from 'layouts/Dashboard.vue'

//Pages
import dashboardIndex from 'pages/dashboard/index.vue'
import dashboardList from 'pages/dashboard/list.vue'
import dashboardProfile from 'pages/dashboard/profile.vue'

const routes = [{
    path: '/',
    component: LayoutDefault,
    children: [{
      path: '',
      component: () => import('pages/auth/index.vue')
    }]
  },
  {
    path: '/dashboard',
    component: LayoutDashboard,
    children: [{
        path: '',
        name: 'dashboard-index',
        component: dashboardIndex
      },
      {
        path: 'profile',
        name: 'dashboard-profile',
        component: dashboardProfile
      },
      {
        path: 'list',
        name: 'dashboard-list',
        component: dashboardList
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
