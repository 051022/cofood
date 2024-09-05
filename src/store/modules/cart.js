import { getCartList } from "../../api/cart"

export default {
    namespaced: true,
    state() {
        return {
            cartList: []
        }
    },
    mutations: {
        //提供一个设置cartList的mutation
        setCartList(state, newList) {
            state.cartList = newList
        }
    },
    actions: {
        async getCartAction() {
            const { data } = await getCartList()
            //手动维护数据，添加一个isChecked状态
            data.list.forEach(item => {
                item.isChecked = false
            })
            context.commit('setCartList', data.list)
        }
    },
    getters: {}

}