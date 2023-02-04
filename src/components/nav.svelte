<script lang="ts">
	import { page } from '$app/stores';
	import {state} from '../utils/state';

	$: links = ['home', 'about', 'shop'].map((link) => ({
		href: `/${link === 'home' ? '' : link}`,
		text: link,
		active: `/${link}` === $page.url.pathname
	}));

	$: $state.loggedIn

	async function logout() {
		await fetch('/api/pb', {
			method: 'POST'
		})
		$state.loggedIn = false
	}
</script>

<nav class="flex flex-row py-6 px-1 sm:px-4 lg:px-10 top-0 sticky justify-between items-center">
	<a class="text-2xl text-teal-500 font-thin" href="/">Buildy Boys</a>
	<div class="flex flex-row gap-4 sm:gap-10">
		{#each links as link}
			<a
				class={`text-xl text-teal-500 capitalize ${
					link.active ? 'underline' : ''
				} underline-offset-8`}
				href={link.href}>{link.text}</a
			>
		{/each}
		{#if $state.loggedIn}
			<button class='text-xl text-teal-500 capitalize underline-offset-8' on:click={logout}>Logout</button>
		{:else}
			<a class='text-xl text-teal-500 capitalize underline-offset-8' href='/login'>Login</a>
		{/if}
	</div>
</nav>
