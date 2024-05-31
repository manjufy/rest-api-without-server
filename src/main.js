import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { register } from 'register-service-worker';

register('./sw.js');
createApp(App).mount('#app')
