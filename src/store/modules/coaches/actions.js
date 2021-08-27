export default {
    async registerCoach(contex, data){
        const userId=contex.rootGetters.userId;
        const   coachData = {
                          //new Date().toISOString(), // - to generate id
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        };

       const response = await fetch(`https://vueoverview-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body:JSON.stringify(coachData),
        });

      // const responceData = await response.json();

       if (!response.ok){
           //
       }
        contex.commit('registerCoach',{
           ...coachData,
           id: userId,
        } );

    },

    async loadCoaches(context, payload){

        if (!payload.forceResresh && !context.getters.shouldUpdate){
            return;
        }
        const response = await fetch(`https://vueoverview-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
};