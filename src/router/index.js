import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'


const routes = [
  { path: '/', name: 'Home', component: Home,
  },
  
  { path: '/login', name: 'Login', component: Login,
  },

  { path: '/signup', name: 'Signup', component: Signup ,
  },

  {
    path: '/AccountSettings',
    name: 'AccountSettings',
    component: ()=> import('../views/AccountSettings.vue'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/FindPeople',
    name: 'FindPeople',
    component: ()=> import('../views/FindPeople.vue'),
  },
  {
    path: '/MyInputs',
    name: 'MyInputs',
    component: ()=> import('../views/MyInputs.vue'),
  },
  {
    path: '/FriendList',
    name: 'FriendList',
    component: ()=> import('../views/FriendList.vue'),
  },
  {
    path: '/User/:username',
    name: 'UserProfile',
    component: ()=> import('../views/UserProfile.vue'),
    props: true,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: ()=> import('../views/Dashboard.vue'),
    props: true,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: ()=> import('../views/admin/Index.vue'),
    props: true,
  }

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
