import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import { createStore } from 'vuex';

Vue.use(Vuex)

const store = createStore({
    state() {
        return {
            // Your state
        };
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        user,
        cart
    }
});

export default store;
