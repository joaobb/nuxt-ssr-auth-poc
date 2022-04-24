export default function ({ store, redirect }) {
  if (store.getters['auth/isAuthenticated']) return

  alert('You are not authenticated!' + '\n' + 'Heading to sign in area!')
  console.error('User is not authenticated')
  store.dispatch('auth/signOut')
  redirect({ name: 'auth' })
}
