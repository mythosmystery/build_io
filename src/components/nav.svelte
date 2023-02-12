<script lang="ts">
	import { page } from '$app/stores'
	import Icon from '@iconify/svelte'
	import { state } from '$lib'

	export let loggedIn: boolean
	export let userName: string | undefined

	$: links = (
		userName
			? [
					{ label: userName, path: '/profile' },
					{ label: 'home', path: '/' },
					{ label: 'about', path: '/about' },
					{ label: 'shop', path: '/shop' }
			  ]
			: [
					{ label: 'home', path: '/' },
					{ label: 'about', path: '/about' },
					{ label: 'shop', path: '/shop' }
			  ]
	).map((link) => ({
		href: link.path,
		text: link.label,
		active: link.path === $page.url.pathname
	}))

	async function logout() {
		await fetch('/logout', {
			method: 'POST'
		})
		if (typeof window !== 'undefined') {
			window.location.href = '/'
		}
	}
</script>

<nav
	class="flex flex-row py-6 px-1 sm:px-4 lg:pr-10 lg:pl-4 top-0 sticky justify-between items-center transition-all ease-in-out"
>
	<div class="flex gap-4 items-center">
		<button
			title="Toggle dark mode"
			on:click={() => {
				$state.darkMode = !$state.darkMode
			}}
			class="text-primary hover:-translate-y-1 hover:scale-110 transition-all ease-in dark:text-secondary-light dark:hover:text-secondary hover:text-primary-light"
		>
			{#if $state.darkMode}
				<Icon icon="line-md:sun-rising-filled-loop" height="32" />
			{:else}
				<Icon icon="line-md:moon-filled-alt-loop" height="32" />
			{/if}
		</button>
		<a
			class="text-2xl text-primary dark:text-secondary-light dark:hover:text-secondary hover:text-primary font-thin"
			href="/">Buildy Boys</a
		>
	</div>

	<div class="flex flex-row gap-4 sm:gap-10">
		{#each links as link}
			<a
				class={`text-xl text-primary dark:text-secondary-light dark:hover:text-secondary hover:text-primary-light capitalize ${
					link.active ? 'underline' : ''
				} underline-offset-8`}
				href={link.href}>{link.text}</a
			>
		{/each}
		{#if loggedIn}
			<button
				class="text-xl text-primary dark:text-secondary-light dark:hover:text-secondary capitalize underline-offset-8"
				on:click={logout}>Logout</button
			>
		{:else}
			<a
				class="text-xl text-primary dark:text-secondary-light dark:hover:text-secondary hover:text-primary-light capitalize underline-offset-8"
				href="/login">Login</a
			>
		{/if}
	</div>
</nav>
