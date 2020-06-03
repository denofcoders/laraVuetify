export default ({
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        },
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        },
    },
    actions: {

        async signIn({dispatch}, credentials) {
            let response = await axios.post("api/auth/signin", credentials);
            await dispatch('validateToken', response.data.token);
        },

        async validateToken({commit, state}, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            if (!state.token) {
                return;
            }

            try {
                let response = await axios.get('api/auth/me');
                commit('SET_USER', response.data)
            } catch (e) {

                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        signOut({ commit }) {
            axios.post('api/auth/signout').then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            });
        }

    },
})
