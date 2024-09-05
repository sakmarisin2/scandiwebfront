import './_style.scss';

import { createApp } from 'vue';

import App from './App.vue';
import { router } from './js/router/router.js';
import { store } from './js/store/store.js';

createApp(App).use(router)
              .use(store)
              .mount('#app')
