<script lang="ts">
  import { state } from '../../utils/state'

  let name = '';
  let username = '';
  let email = ''
  let password = ''

  let loading = false

  let error: string | null = null

  const register = async () => {
    console.log(name, username, email, password)
    loading = true
    try {
      await $state.pb.collection('users').create({
        name,
        username,
        email,
        password
      })
      loading = false
    } catch (e) {
      console.log(e)
      loading = false
      error = 'Something went wrong.'
    }
  }
</script>

<h1 class="text-4xl font-thin my-24 text-center">Register</h1>

<div class="flex flex-col gap-2 w-3/4 lg:w-1/4 mx-auto">
  <input
    type="text"
    placeholder="Name"
    class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
    bind:value={name}
  />
  <input
    type="text"
    placeholder="Username"
    class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
    bind:value={username}
  />
  <input
    type="text"
    placeholder="Email"
    class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
    bind:value={email}
  />
  <input
    type="password"
    placeholder="Password"
    class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
    bind:value={password}
  />
  <button
    disabled={loading || !!error}
    on:click={register}
    class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
  >
    Register
  </button>
</div>
