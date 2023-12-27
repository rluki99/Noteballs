import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNoteVue from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/editNote/:id',
        name: 'edit-note',
        component: ViewEditNoteVue
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router