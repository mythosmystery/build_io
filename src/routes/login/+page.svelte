<script lang="ts">
	import type { ActionData } from './$types'
	import PocketBase from 'pocketbase'

	export let form: ActionData
</script>

<h1 class="text-4xl font-thin my-24 text-center">Login</h1>

<form method="post" class="flex flex-col w-3/4 lg:w-1/4 mx-auto">
	<input
		type="text"
		name="username"
		placeholder="Email/Username"
		class="p-4 rounded-md mb-2 focus:outline-teal-500"
	/>

	{#if form?.error}
		<p class="text-red-500">{form?.error}</p>
	{/if}

	<input
		type="password"
		name="password"
		placeholder="Password"
		class="p-4 rounded-md mb-2 focus:outline-teal-500"
	/>

	<button
		type="submit"
		class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
	>
		Login
	</button>
	<p class="mt-1">
		Don't have an account?
		<a href="/register" class="italic text-teal-500 hover:text-teal-700">Register</a>
	</p>
</form>
