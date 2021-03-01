import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginView from "../views/LoginView.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import auth from './middleware/auth.js'
import guest from './middleware/guest.js'
import middlewarePipeline from './middlewarePipeline'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/auth',
    name: 'Auth',
    component: LoginView,
    children: [
      {
        path:'',
        name:'Auth',
        component: Login,
        meta:{
          middleware: [
            guest
          ]
        }
      },
      {
      path:'register',
      name: 'Auth.Register',
      component: Register,
      meta:{
        middleware:[
          guest
        ]
      }
    }]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      middleware:[
        auth
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      middleware:[
        auth
      ]
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next)=>{
  
  if(!to.meta.middleware)
    return next()

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
});


export default router
