//Layouts
import LayoutDefault from 'layouts/Default.vue'
import LayoutDashboard from 'layouts/Dashboard.vue'

//Pages-dashboard
import dashboardIndex from 'pages/dashboard/index.vue'
import dashboardList from 'pages/dashboard/list.vue'
import dashboardProfile from 'pages/dashboard/profile.vue'
import dashboardSetting from 'pages/dashboard/setting.vue'

//Pages-Auth
import authLogin from 'pages/auth/login.vue'
import authRegister from 'pages/auth/register.vue'

//Pages-default
import defaultLandingPage from 'pages/default/landingPage.vue'


const routes = [{
    path: '/',
    component: LayoutDefault,
    children: [{
        path: '',
        component: defaultLandingPage
      },
      {
        path: 'login',
        name: 'login',
        component: authLogin
      },
      {
        path: 'register',
        name: 'register',
        component: authRegister
      },
    ]
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
      },
      {
        path: 'setting',
        name: 'dashboard-setting',
        component: dashboardSetting
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
