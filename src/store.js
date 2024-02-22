import { createStore } from 'vuex'

export default createStore({
    state: {
        userName: null
    },
    mutations: {
        SET_USER(state, user) {
            state.userName = user;
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },
    getters: {
        userName: state => state.userName
    }
})