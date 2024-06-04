const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true,
  },  
  redirect: '/main',
  component: () => import('@/layouts/principal/PaginaPrincipal.vue'),
  children: [

    {
      name: 'dashboard',
      path: '/dashboards/principal',
      component: () => import('@/views/principal/index.vue')
    },
    {
      name: 'Prueba1',
      path: '/dashboards/prueba1',
      component: () => import('@/views/dashboard/Prueba1.vue')
    },    
    {
      name: 'Prueba2',
      path: '/dashboards/prueba2',
      component: () => import('@/views/dashboard/Prueba2.vue')
    },
    {
      name: 'Prueba3',
      path: '/dashboards/prueba3',
      component: () => import('@/views/dashboard/Prueba3.vue')
    }
  ]
}

export default MainRoutes;
