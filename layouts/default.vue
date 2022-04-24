<template>
  <div class="default-layout flex flex-col min-h-screen bg-gray-200">
    <nav class="p-4 bg-gray-300">
      <ul class="flex gap-8 font-bold">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts">Posts Page</nuxt-link>
        </li>
        <li class="ml-auto">
          <button v-if="isAuthenticated" class="font-bold" @click="onLogout">
            Logout
          </button>
          <nuxt-link v-else to="/auth">Login</nuxt-link>
        </li>
      </ul>
    </nav>

    <Nuxt style="min-height: calc(100vh - 56px)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
  methods: {
    onLogout() {
      this.$store.dispatch('auth/signOut')
      console.log('LOGOUT')
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-yellow-700;
}
</style>
