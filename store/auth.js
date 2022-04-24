import { persistency } from '~/helpers/persistency'

export default {
  namespaced: true,
  state: () => ({
    token: null,
  }),
  actions: {
    initAuth({ state, commit, dispatch }, req) {
      console.log('>>>>> INIT AUTH <<<<<')

      let token
      let tokenExpiration

      if (req) {
        if (!req.headers.cookie) return

        token = persistency.getItemFromCookie(req.headers.cookie, 'token')

        console.log('SERVER COOKIE', token)
        if (!token) return

        tokenExpiration = persistency.getItemFromCookie(
          req.headers.cookie,
          'tokenExpiration'
        )
      } else {
        console.log('AUTH ON CLIENT')

        token = persistency.getItem('token')
        console.log('CLIENT COOKIE', token)

        tokenExpiration = persistency.getItem('tokenExpiration')
      }

      const timeToTokenExpiration = tokenExpiration - new Date().getTime()
      if (!timeToTokenExpiration || !token || timeToTokenExpiration < 0) {
        return dispatch('signOut')
      }

      commit('SET_TOKEN', token)
    },
    async singIn({ dispatch, commit }, payload) {
      const result = await this.$authService.signIn(payload)

      commit('SET_TOKEN', result.token)
      persistency.setItem(
        'tokenExpiration',
        new Date().getTime() + result.expiresIn * 1000
      )
      return result
    },
    async signUp({ commit }, payload) {
      return await this.$authService.signUp(payload)
    },
    signOut({ commit }) {
      commit('SET_TOKEN', null)
      persistency.setItem('tokenExpiration', null)
      this.$router.push('/')
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
      persistency.setItem('token', payload)
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token && state.token !== 'null'
    },
  },
}
