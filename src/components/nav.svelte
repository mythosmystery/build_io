<script lang="ts">
	import { page } from '$app/stores';

	export let loggedIn: boolean
	export let userName: string | null

	$: links = (userName ? [{label: userName, path: '/profile'}, {label: 'home', path: '/'}, {label: 'about', path: '/about'}, {label: 'shop', path: '/shop'}] : [{label: 'home', path: '/'}, {label: 'about', path: '/about'}, {label: 'shop', path: '/shop'}]).map((link) => ({
		href: link.path,
		text: link.label,
		active: link.path === $page.url.pathname
	}));

	async function logout() {
		try {
			await fetch('/logout', {
				method: 'POST'
			})
			loggedIn = false
			userName = null
		} catch (error) {
			console.error(error)
		}
	}
</script>

<nav class="flex flex-row py-6 px-1 sm:px-4 lg:px-10 top-0 sticky justify-between items-center">
	<a class="text-2xl text-primary font-thin" href="/">Buildy Boys</a>
	<div class="flex flex-row gap-4 sm:gap-10">
		{#each links as link}
			<a
				class={`text-xl text-primary capitalize ${
					link.active ? 'underline' : ''
				} underline-offset-8`}
				href={link.href}>{link.text}</a
			>
		{/each}
		{#if loggedIn}
			<button class='text-xl text-primary capitalize underline-offset-8' on:click={logout}>Logout</button>
		{:else}
			<a class='text-xl text-primary capitalize underline-offset-8' href='/login'>Login</a>
		{/if}
	</div>
</nav>
