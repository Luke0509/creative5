import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import MyPage from './views/MyPage.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
     path: '/register',
     name: 'register',
     component: Register
   },
   {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
