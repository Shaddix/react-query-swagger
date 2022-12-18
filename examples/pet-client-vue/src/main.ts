import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { AxiosQuery } from './api';

AxiosQuery.setBaseUrl('https://petstore.swagger.io/v2');
createApp(App).use(VueQueryPlugin).mount('#app');
