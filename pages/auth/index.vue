<template>
  <div class="m-auto flex items-center justify-center">
    <div class="w-full max-w-md">
      <form
        class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        @submit.prevent="handleSubmit"
      >
        <div
          class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
        >
          Login
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            class="base-input"
            name="email"
            v-model="form.email"
            type="email"
            required
            autofocus
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-normal mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            class="base-input"
            v-model="form.password"
            type="password"
            placeholder="Password"
            name="password"
            required
            autocomplete="current-password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
            type="submit"
          >
            Sign In
          </button>

          <nuxt-link to="/auth/signup" class="ml-auto text-gray-700 text-sm"
            >Sign Up</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const { email, password } = this.form

        const result = await this.$store.dispatch('auth/singIn', {
          email,
          password,
        })

        await this.$router.push({ name: 'posts' })
      } catch (err) {
        console.error(err)
        alert(err.message)
      }
    },
  },
}
</script>

<style scoped></style>
