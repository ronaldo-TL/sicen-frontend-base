const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/diseno/DisenoBlanco.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Landing Page',
      path: '/',
      component: () => import('@/views/pages/cargarPagina/index.vue')
    },
    {
      name: 'Side Login',
      path: '/auth/login',
      component: () => import('@/views/authentication/SideLogin.vue')
    },
  ]
}
export default AuthRoutes;
