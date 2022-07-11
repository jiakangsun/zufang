import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Home')
const Search = () => import('@/views/Search')
const My = () => import('@/views/My')
const Information = () => import('@/views/Information/index.vue')
const City = () => import('@/views/City')
const Collect = () => import('@/views/Collect')
const Hire = () => import('@/views/Hire')
const Publish = () => import('@/views/Publish')
const Houses = () => import('@/views/Houses')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home, name: 'home' },
      { path: 'search', component: Search, name: 'search' },
      { path: 'infomation', component: Information, name: 'infomation' },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/city', component: City, name: 'city' },
  { path: '/collect', component: Collect, name: 'collect' },
  { path: '/hire', component: Hire, name: 'hire' },
  { path: '/publish', component: Publish, name: 'publish' },
  { path: '/houses/:houseId', component: Houses, name: 'houses' }
]

const router = new VueRouter({
  routes
})

export default router
