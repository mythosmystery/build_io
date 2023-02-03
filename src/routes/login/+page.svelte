<h1 class="text-4xl font-thin my-24 text-center">Login</h1>

<div class="flex flex-col w-3/4 lg:w-1/4 mx-auto">
	<input
		type="text"
		placeholder="Email"
		class="p-4 rounded-md mb-2 focus:outline-teal-500"
		bind:value={email}
	/>

	<input
		type="password"
		placeholder="Password"
		class="p-4 rounded-md mb-2 focus:outline-teal-500"
		bind:value={password}
	/>

	<button
		on:click={login}
		class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
	>
		Login
	</button>
	<p class="mt-1">
		Don't have an account?
		<a href="/register" class="italic text-teal-500 hover:text-teal-700">Register</a>
	</p>
</div>

<script lang="ts">
	import { state } from '../../utils/state'

	let email = ''
	let password = ''

	const login = async () => {}
</script>
