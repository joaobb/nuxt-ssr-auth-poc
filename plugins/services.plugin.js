import { AuthService } from '~/services/Auth.service'
import { PostsService } from '~/services/Posts.service'

export default ({ app: { $axios, store } }, inject) => {
  const authService = new AuthService($axios, store.state.auth)
  const postsService = new PostsService($axios, store.state.auth)

  // inject the service, making it available in the context, component, store, etc.
  inject('authService', authService)
  inject('postsService', postsService)
}
