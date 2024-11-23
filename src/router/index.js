import { createRouter, createWebHistory } from 'vue-router'

import {authenticationGuard} from "../iam/services/authentication.guard.js";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/Recommendations',
      name: 'Recommendations',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/RecommendationsView.vue')
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/UserProfileRents.vue')
    },
    {
      path: '/vehicles',
      name: 'Vehicle',
      component: () => import('../views/Renter/VehiclesList.vue')
    },
    {
      path: '/RentVehicle',
      name: 'RentVehicle',
      component: () => import('../views/Renter/RentVehicleView.vue')
    },
    /*{
      path: '/RentVehicle/:id',
      name: 'RentVehicle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Renter/RentVehicleView.vue'),
      props: true
    },*/
    {
      path: '/OwnerProfileView',
      name: 'OwnerProfileView',
      component: () => import('../views/Owner/OwnerProfileView.vue')
    },
    {
      path: '/PlansOwner',
      name: 'PlansOwner',
      component: () => import('../views/Owner/PlansOwnerView.vue')
    },
    {
      path:'/OrderOwner',
      name:'OrderOwner',
      component: () => import('../views/Owner/OrderOwnerView.vue')
    },
    {
      path:'/VehicleRegisterOwner',
      name:'VehicleRegisterOwner',
      component: () => import('../views/Owner/VehicleRegisterOwnerView.vue')
    },
    {
      path:'/OwnerViewVehicles',
      name:'OwnerViewVehicles',
      component: () => import('../views/Owner/OwnerViewVehicles.vue')
    },
    { path: '/sign-in',                 name: 'sign-in',    component: SignInComponent,             meta: { title: 'Sign In'}},
    { path: '/sign-up',                 name: 'sign-up',    component: SignUpComponent,             meta: { title: 'Sign Up'}}
  ]
})

router.beforeEach((to,
                   from,
                   next) => {
  let baseTitle = 'RideFind';
  document.title = `${baseTitle} | ${to.meta['title']}`;
  authenticationGuard(to, from, next);
});

export default router