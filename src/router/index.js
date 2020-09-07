import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseRoot from '../views/root/Base.vue'
import BaseAdmin from '../views/admin/Base.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: "/", 
    component: BaseRoot,
    children: [
      {
        path: "",
        name: "Root-Home",
        component: () => import('../views/root/Home.vue') 
      },
    ]
  },
  {
    path: '/admin', 
    component:  BaseAdmin,
    children: [
      {
        path: "",
        name: "Admin-Home",
        component: () => import('../views/admin/Home.vue') 
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
