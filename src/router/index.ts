import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/about',
        component: () => import('@/layouts/principal/PaginaPrincipal.vue')
    },
    {
        path: '/about1',
        component: () => import('@/components/Prueva1.vue')
    },
    {
        path: '/about2',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/authentication/Error.vue')
    },
]


export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});
