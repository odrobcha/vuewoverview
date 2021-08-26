export default {
    registerCoach(contex, data){
        const   coachData = {
            id: contex.rootGetters.userId,    // 'c3',               //new Date().toISOString(), // - to generate id
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        };
        contex.commit('registerCoach', coachData);

    }
};