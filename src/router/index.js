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
      {
        path: "dorm",
        name: "Dorm-Home",
        component: () => import('../views/root/Dorm.vue') 
      },{
        path: "detail",
        name: "detail-Home",
        component: () => import('../views/root/DormDetail') 
      },{
        path: "about",
        name: "about-Home",
        component: () => import('../views/root/About') 
      },
      {
        path: "test",
        name: "Root-test",
        component: () => import('../views/root/Test.vue') 
      },
      {
        path: "map",
        name: "Dorm-map",
        component: () => import('../views/root/Map.vue') 
      }
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
      {
        path: "test",
        name: "Admin-test",
        component: () => import('../views/admin/Test.vue') 
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
