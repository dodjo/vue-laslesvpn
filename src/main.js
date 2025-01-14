import { createApp } from 'vue'
import './assets/style/style.css'
import App from './App.vue'
import i18n from '@/service/i18n/index.js';


const app = createApp(App);
app.use(i18n);
app.mount('#app');
