import { createRouter, createWebHashHistory } from 'vue-router';
import MainRoutes from "./MainRoutes";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/authentication/Error.vue')
        },
        MainRoutes,
    ]
});
