import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import New from '@/components/New.vue'
import MascotaDetail from '@/components/MascotaDetail.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/Login', component: Login, name: 'Login' },
  { path: '/Dashboard', component: Dashboard, name: 'Dashboard' },
  { path: '/New', component: New, name: 'New' },
  { path: '/MascotaDetail/:id', component: MascotaDetail, name: 'MascotaDetail' }
]

export default routes
