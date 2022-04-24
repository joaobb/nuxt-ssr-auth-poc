import axios from 'axios'
import { BaseService } from '~/services/Base.service'

export class AuthService extends BaseService {
  async signIn(payload) {
    try {
      const response = await this.$axios.post('/api/auth', payload)
      return response.data
    } catch (err) {
      console.log(err.response)
      throw new Error(err.response?.data?.message || err.message)
    }
  }

  async signUp(payload) {
    try {
      const response = await this.$axios.post('/api/auth/signup', payload)

      return response.data
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message)
    }
  }
}
