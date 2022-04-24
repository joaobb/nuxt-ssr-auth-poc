export class BaseService {
  constructor($axios, authStore) {
    this.$axios = $axios
    this.authStore = authStore
  }
}
