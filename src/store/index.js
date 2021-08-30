import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import coachesModule from'./modules/coaches/index'
import requestsModule from'./modules/request/index'
import authModule from './modules/auth/index'

const store = new Vuex.Store({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule,
    },



});

export default store;