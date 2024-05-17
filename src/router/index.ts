import { createRouter, createWebHistory } from 'vue-router'
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: import('@/views/HomeView.vue') },
        { path: '/login', name: 'login', component: import('@/views/LoginView.vue') },
        { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
        { path: '/todo', name: 'todo', component: () => import('@/views/TodoView.vue') },
        {
            path: '/auth',
            component: () => import('@/views/auth/AuthLayout.vue'),
            children: [
                {
                    path: '/auth/dashboard', name: 'dashboard', component: () => import('@/views/auth/AuthDashboard.vue'),
                },
                {
                    path: '/auth/clients', name: 'clients', component: () => import('@/views/auth/ClientList.vue'),
                },
                { path: '/auth/banks', name: 'banks', component: () => import('@/views/auth/UserBank.vue') },
                { path: '/auth/profile', name: 'profile', component: () => import('@/views/auth/UserProfile.vue') },
                { path: '/auth/settings', name: 'settings', component: () => import('@/views/auth/AuthSettings.vue') },
            ]
        },
        {
            path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFoundView.vue')
        },
    ]
})

