import VueRouter from 'vue-router'
import DerekV from './pages/DerekV'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

const routes = [
  { path: '/', component: DerekV, name: 'DerekV' },
  { path: '/skills', component: Skills, name: 'Skills' },
  { path: '/projects', component: Projects, name: 'Projects' }
]

export default new VueRouter({ routes, mode: 'history' })
