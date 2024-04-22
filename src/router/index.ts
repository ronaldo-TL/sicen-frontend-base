import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/about',
        component: () => import('@/layouts/principal/PaginaPrincipal.vue')
    },
    {
        path: '/about1',
        component: () => import('@/layouts/principal/vertical-sidebar/VerticalSidebar.vue')
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
