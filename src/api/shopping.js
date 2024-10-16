import instance from "../utils/request"

// 获取商品列表
export const getProListService = () => {
    return instance({
        url: '/product'
    })
}

// 获取商品详情
export const getProDetailsService = (id) => {
    return instance({
        url: '/product/detail',
        params: {
            id
        }
    })
}

// 将商品添加至购物车
export const addProductService = (id, num, Authorization) => {
    return instance({
        url: '/cart',
        method: 'post',
        params: {
            id,
            num,
            Authorization
        }
    })
}
