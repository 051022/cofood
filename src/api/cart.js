// 导入createApp
import { createApp } from "vue"
// 导入createStore
import { createStore } from "vuex"

// 创建一个新的 store 实例
const cartStore = createStore({
    state() {
        return {
            count: 10,
            cartList: [{
                id: '312341',
                name: '鸡胸肉',
                img: '/src/images/pic6.png',
                unitPrice: '39.90',
                num: 3
            }, {
                id: '312342',
                name: '蛋白质粉',
                img: '/src/images/pic6.png',
                unitPrice: '239.90',
                num: 1
            }]
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        getCartList() {

        }
    }
})

// 导出cartStore
export default cartStore
