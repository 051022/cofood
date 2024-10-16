// 引入Vue 3  
import { createApp } from 'vue';
// 引入Vuex 4  
import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';


// 创建user模块
const userModule = {
    namespaced: true,
    state: {
        userInfo: {
            username: '',
            introduction: '',
            birth: '',
            avatar: '',
            age: '',
            gender: '',
            height: '',
            weight: '',
        },
        bodyData: {
            height: '',
            weight: '',
            blood_pressure: "",
            blood_sugar: "",
            basal_metabolism: '',
            heart_rate: '',
            step_count: '',
            water_intake: '',
            age: '',
            gender: '',
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = { ...userInfo };
        },
        setBodyData(state, bodyData) {
            state.bodyData = { ...bodyData };
        }
    },
    actions: {
        async fetchUserInfo({ commit, dispatch, rootState }) {
            try {
                const response = await axios.get("https://www.femto.fun/user/information", {
                    headers: {
                        Authorization: `Bearer ${rootState.token}`,
                    },
                });
                const { code, data } = response.data;
                if (code === 200 && data) {
                    const userInfo = {
                        username: data.userName || "",
                        introduction: data.introduction || "",
                        birth: data.birth ? data.birth.split("T")[0] : "",
                        avatar: data.avatar || "",
                        age: data.age || "",
                        gender: data.gender || "",
                        height: data.height || "",
                        weight: data.weight || "",
                    };
                    commit('setUserInfo', userInfo);
                } else {
                    console.error("未能获取到有效的用户信息");
                }
            } catch (error) {
                console.error("获取用户信息失败:", error);
            }
        },
        async fetchBodyData({ commit, rootState }) {
            try {
                console.log("Fetching body data...");
                const response = await axios.get("https://www.femto.fun/user/data", {
                    headers: {
                        Authorization: `Bearer ${rootState.token}`,
                    },
                });
                console.log("Body data response:", response.data);
                const { code, data } = response.data;
                if (code === 200 && data) {
                    const bodyData = {
                        height: data.height || '',
                        weight: data.weight || '',
                        blood_pressure: data.bloodPressure || '',
                        blood_sugar: data.bloodSugar || '',
                        basal_metabolism: data.basalMetabolism || '',
                        heart_rate: data.heartRate || '',
                        step_count: data.stepCount || '',
                        water_intake: data.waterIntake || '',
                        age: data.age || '',
                        gender: data.gender || '',
                    };
                    commit('setBodyData', bodyData);
                    console.log("Body data updated:", bodyData);
                } else {
                    console.error("未能获取到有效的身体数据", response.data);
                }
            } catch (error) {
                console.error("获取身体数据失败:", error.response || error);
            }
        }
    }
};

// 创建store  
const store = createStore({
    state: {
        token: localStorage.getItem('token') || '',
    },
    getters: {
        token: state => state.token,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        clearToken(state) {
            state.token = '';
            localStorage.removeItem('token');
        },
    },
    actions: {
        async fetchUserInfo({ commit, state }) {
            if (!state.token) {
                console.error("No token available");
                return;
            }
            try {
                const response = await axios.get("https://www.femto.fun/user/information", {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                });
                const { code, data } = response.data;
                if (code === 200 && data) {
                    const userInfo = {
                        username: data.userName || "",
                        introduction: data.introduction || "",
                        birth: data.birth ? data.birth.split("T")[0] : "",
                        avatar: data.avatar || "",
                        age: data.age || "",
                        gender: data.gender || "",
                        height: data.height || "",
                        weight: data.weight || "",
                    };
                    commit('user/setUserInfo', userInfo);
                    // 在获取用户信息后，立即获取身体数据
                    await dispatch('user/fetchBodyData');
                } else {
                    console.error("未能获取到有效的用户信息");
                }
            } catch (error) {
                console.error("获取用户信息失败:", error);
            }
        },
        async login({ dispatch, commit }, loginData) {
            try {
                const response = await axios.post('https://www.femto.fun/login', loginData);
                if (response.data.code === 200) {
                    const token = response.data.data.token;
                    commit('setToken', token);
                    // 登录成功后，立即获取用户信息和身体数据
                    await dispatch('fetchUserInfo');
                    return response.data;
                } else {
                    throw new Error(response.data.msg || '登录失败');
                }
            } catch (error) {
                console.error('登录失败:', error);
                throw error;
            }
        },
        async logout({ commit }) {
            commit('clearToken');
            commit('user/setUserInfo', {
                username: '',
                introduction: '',
                birth: '',
                avatar: '',
                age: '',
                gender: '',
                height: '',
                weight: '',
            });
            commit('user/setBodyData', {
                height: '',
                weight: '',
                blood_pressure: "",
                blood_sugar: "",
                basal_metabolism: '',
                heart_rate: '',
                step_count: '',
                water_intake: '',
                age: '',
                gender: '',
            });
        },
        saveToken({ commit }, token) {
            commit('setToken', token);
        },
        async askQuestion({ commit }, { question, password }) {
            try {
                const response = await axios.post('https://www.femto.fun/question',
                    { question, password },
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 1
                        }
                    }
                );

                if (response.data.code === 200) {  // 注意这里，我们将 '200' 改为 200
                    // 直接返回整个响应数据
                    return response.data;
                } else {
                    // 处理错误
                    throw new Error(response.data.answer || '未知错误');
                }
            } catch (error) {
                console.error('API调用失败:', error);
                throw error;
            }
        }
    },
    modules: {
        user: userModule
    },
    plugins: [
        createPersistedState({
            storage: window.localStorage,
            paths: ['token', 'user.userInfo', 'user.bodyData'] // 确保包含所有需要持久化的状态
        })
    ]
});

// 导出store以便在其他文件中使用  
export default store;
