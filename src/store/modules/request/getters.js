export default {
    requests(state, _, _2, rootGetters){ //requests(state, getters, rootState, rootGetters)
        const coachId = rootGetters.userId;
       // console.log(state.requests);

        return state.requests.filter(req=>{
            return req.coachId === coachId;
        });
    },

    hasRequests(state, getters){
        return  getters.requests && getters.requests.length > 0;
    }
};