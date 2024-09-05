import request from '../utils/request'

//获取购物车列表
export const getCartList = () => {
    return request.get()
}