import { createStore } from 'vuex'
import { apiClient } from '@/api'
import { listClient } from '@/api/client'
export const store = createStore({
    state() {
        return {
            email: '',
            name: '',
            count: 0,
            roles: [],
            access_token: '',
            isAuthenticated: false,
            clients: {}
        }
    },
    getters: {
        getClients(state: any) {
            return state.clients.data
        }
    },
    actions: {
        async fetchClients(context) {
            const data = await listClient()
            context.commit('setClients', data)
        }
    },
    mutations: {
        userAuthenticated(state: any, payload: any) {
            apiClient.defaults.headers.common["Authorization"] = `Bearer ${payload.access_token}`;
            state.roles = payload.roles
            state.email = payload.email
            state.name = payload.name
            state.access_token = payload.access_token
            state.isAuthenticated = payload.access_token ? true : false
        },
        userLogout(state: any) {
            apiClient.defaults.headers.common["Authorization"] = `Bearer`;
            state.roles = []
            state.email = ''
            state.name = ''
            state.access_token = ''
            state.isAuthenticated = false
        },
        setClients(state: any, payload) {
            state.clients = payload.data
        }
    }
})