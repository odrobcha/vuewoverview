import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import coachesModule from'./modules/coaches/index'
import requestsModule from'./modules/request/index'

const store = new Vuex.Store({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
    },
    state(){
        return{
            userId: 'c3',
        }
    },

    getters:{
        userId(state){
            return state.userId;
        }
    }
});

export default store;