export default {
    async login(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuMxurUWC9OzX0islkvFAASlI-633DLr0',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        if (!response.ok){
        //   console.log(response);
            const error = new Error(responseData.message || 'Fail to auth');
            throw error;
        }
       // console.log(response);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },

    async signup(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuMxurUWC9OzX0islkvFAASlI-633DLr0',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok){
            console.log(response);
            const error = new Error(responseData.message || 'Fail to auth');
            throw error;
        }

        console.log(response);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,

        })
    },

    logout(context){
        //no need to send request, as server do not save any data about user and session
       // state.token = null;
       // //state.userId = null;
       // state.tokenExpiration = null;


        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        })
    }

}