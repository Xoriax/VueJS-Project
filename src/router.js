import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/home-page.vue'
import ConversationsIndexPage from './components/ConversationsIndexPage.vue'
import store from './store'

const routes = [
    { path: '/', component: HomePage },
    {
        path: '/conversations',
        component: ConversationsIndexPage,
        beforeEnter(to, from, next) {
            if (store.getters.userName) {
                next();
            } else {
                next('/');
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router