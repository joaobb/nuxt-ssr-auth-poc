export default {
  namespaced: true,
  state: () => ({
    posts: null,
  }),
  actions: {
    async getPosts({ commit }, payload) {
      const result = await this.$postsService.getPosts()

      commit('SET_POSTS', result)

      return result
    },
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
    },
  },
}
