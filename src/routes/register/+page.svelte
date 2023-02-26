<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<h1 class="text-4xl font-thin mt-12 mb-12 text-center dark:text-primary-light">Register</h1>

<form method="post" use:enhance class="flex flex-col gap-2 w-3/4 lg:w-1/4 mx-auto pb-24">
	<input
		type="text"
		name="name"
		placeholder="Name"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>
	<input
		type="text"
		name="username"
		placeholder="Username"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>
	<input
		type="text"
		name="email"
		placeholder="Email"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>
	<input
		type="text"
		name="phone"
		placeholder="Phone Number"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>
	<input
		type="password"
		name="password"
		placeholder="Password"
		class="p-4 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white mt-4"
	/>
	<input
		type="password"
		name="passwordConfirm"
		placeholder="Confirm Password"
		class="p-4 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
	/>
	<button
		type="submit"
		class="border-2 border-primary hover:bg-primary text-primary-dark dark:text-white hover:text-white font-bold py-2 px-4 rounded-lg"
	>
		Register
	</button>
	<p class="dark:text-white">
		Already have an account? <a href="/login" class="text-primary hover:text-primary-light">Login</a
		>
	</p>
	{#if form?.error}
		<p class="text-red-500">{form.error}</p>
	{/if}
</form>
