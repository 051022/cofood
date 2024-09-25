// 引入Vue 3  
import { createApp } from 'vue';
// 引入Vuex 4  
import { createStore } from 'vuex';
// 引入你的模块  
import user from './modules/user';

// 创建store  
const store = createStore({
    state() {
        return {
            // 你的状态  
        };
    },
    getters: {
        // 你的getters  
    },
    mutations: {
        // 你的mutations  
    },
    actions: {
        // 你的actions  
    },
    modules: {
        user,
    }
});

// 导出store以便在其他文件中使用  
export default store;

