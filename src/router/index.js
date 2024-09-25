
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '../store/modules/user'


const login = () => import('../views/login.vue')
const register = () => import('../views/register.vue')
const home = () => import('../views/home.vue')
const community = () => import('../views/community.vue')
const recommand = () => import('../views/recommand.vue')
const shopping = () => import('../views/shopping.vue')
const user = () => import('../views/user.vue')
const changePassword = () => import('../views/changePassword.vue')
const breakfast = () => import('../views/breakfast.vue')
const lunch = () => import('../views/lunch.vue')
const dinner = () => import('../views/dinner.vue')
const userInformation = () => import('../views/userInformation.vue')
const userCenter = () => import('../views/userCenter.vue')
const userAddress = () => import('../views/userAddress.vue')
const recipe = () => import('../views/recipe.vue')
const shoppingCart = () => import('../views/shoppingCart.vue')
const orders = () => import('../views/orders.vue')
const collection = () => import('../views/collection.vue')

// 定义路由
const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/community',
    name: 'community',
    component: community
  },
  {
    path: '/recommand',
    name: 'recommand',
    component: recommand
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: shopping
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: changePassword
  },
  {
    path: '/breakfast',
    name: 'breakfast',
    component: breakfast
  },
  {
    path: '/lunch',
    name: 'lunch',
    component: lunch
  },
  {
    path: '/dinner',
    name: 'dinner',
    component: dinner
  },
  {
    path: '/userInformation',
    name: 'userInformation',
    component: userInformation
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter
  },
  {
    path: '/userAddress',
    name: 'userAddress',
    component: userAddress
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: recipe
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  },
  {
    path: '/orders',
    name: 'orders',
    component: orders
  },
  {
    path: '/collection',
    name: 'collection',
    component: collection
  },
]

// 创建实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//全局前置导航守卫
const authUrls = ['/home']

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }

  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/')
    alert('请先登录')
  }
})


// 暴露
export default router
