import { createApp } from 'vue'; // 从vue中导入createApp函数

import './style.css';
import App from './App.vue';
import router from './router';
import Navigation from './components/Navigation.vue';
import userCenterNavigation from './components/userCenterNavigation.vue';
import mealRecommand from './components/mealRecommand.vue';
import products from './components/products.vue';
import carousel from './components/carousel.vue';
import Address from './components/Address.vue';
import order from './components/order.vue';
import shoppingCartItem from './components/shoppingCartItem.vue';
import comment from './components/comment.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import store from './store/indexs';

createApp(App).use(router)
    .use(ElementPlus)
    // .use(store)
    .component('Navigation', Navigation)
    .component('userCenterNavigation', userCenterNavigation)
    .component('mealRecommand', mealRecommand)
    .component('products', products)
    .component('carousel', carousel)
    .component('Address', Address)
    .component('order', order)
    .component('shoppingCartItem', shoppingCartItem)
    .component('comment', comment)
    .mount('#app'); // 使用createApp函数创建Vue应用，并将导入的组件注册到应用中


