// 引入Vue 3  
import { createApp } from 'vue';
// 引入Vuex 4  
import { createStore } from 'vuex';


// 创建store  
const store = createStore({
    state: {
        token: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
    },
    actions: {
        saveToken({ commit }, token) {
            commit('SET_TOKEN', token);
        },
    },
    modules: {
    },
    getters: {
        token: state => state.token,
    },
});

// 导出store以便在其他文件中使用  
export default store;

