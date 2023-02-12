<script lang="ts">
	import type { ActionData } from './$types'
	import PocketBase from 'pocketbase'

	export let form: ActionData
</script>

<h1 class="text-4xl font-thin my-24 text-center dark:text-primary-light">Login</h1>

<form method="post" class="flex flex-col w-3/4 lg:w-1/4 mx-auto">
	<input
		type="text"
		name="username"
		placeholder="Email/Username"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>

	{#if form?.error}
		<p class="text-red-500">{form?.error}</p>
	{/if}

	<input
		type="password"
		name="password"
		placeholder="Password"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>

	<button
		type="submit"
		class="border-2 border-primary hover:bg-primary text-primary-dark dark:text-white hover:text-white font-bold py-2 px-4 rounded-lg"
	>
		Login
	</button>
	<p class="mt-1 dark:text-white">
		Don't have an account?
		<a
			href="/register"
			class="italic text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary"
			>Register</a
		>
	</p>
</form>
