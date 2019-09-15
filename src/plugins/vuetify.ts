import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'mdi',
});

export default new Vue();
