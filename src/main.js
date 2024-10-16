import { createApp } from 'vue'; // 从vue中导入createApp函数

import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
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

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus)
app.component('Navigation', Navigation)
app.component('userCenterNavigation', userCenterNavigation)
app.component('mealRecommand', mealRecommand)
app.component('products', products)
app.component('carousel', carousel)
app.component('Address', Address)
app.component('order', order)
app.component('shoppingCartItem', shoppingCartItem)
app.component('comment', comment)
app.mount('#app'); // 使用createApp函数创建Vue应用，并将导入的组件注册到应用中


