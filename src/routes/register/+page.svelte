<script lang="ts">
	import { state } from '../../utils/state';
  import type {ActionData} from './$types'

  export let form: ActionData
</script>

<h1 class="text-4xl font-thin mt-24 mb-12 text-center">Register</h1>

<form method="post" class="flex flex-col gap-2 w-3/4 lg:w-1/4 mx-auto">
	<input
		type="text"
    name="name"
		placeholder="Name"
		class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
	/>
	<input
		type="text"
    name="username"
		placeholder="Username"
		class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
	/>
	<input
		type="text"
    name="email"
		placeholder="Email"
		class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
	/>
	<input
		type="password"
    name="password"
		placeholder="Password"
		class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100 mt-4"
	/>
  <input
    type="password"
    name="passwordConfirm"
    placeholder="Confirm Password"
    class="p-4 rounded-md mb-2 focus:outline-teal-500 bg-gray-100"
  />
	<button
    type="submit"
		class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
	>
		Register
	</button>
  {#if form?.error}
    <p class="text-red-500">{form.error}</p>
  {/if}
</form>
