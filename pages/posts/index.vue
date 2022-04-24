<template>
  <div class="h-full p-8">
    <ul class="flex flex-col gap-6">
      <li class="bg-white p-6" v-for="post in posts" :key="post.id">
        <h2 class="text-xl font-semibold text-gray-700">{{ post.title }}</h2>

        <p class="text-gray-500">{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsPage',
  middleware: ['check-auth', 'auth'],
  async asyncData({ store }) {
    const posts = (await store.dispatch('posts/getPosts')) || []

    return { posts }
  },
}
</script>

<style scoped></style>
