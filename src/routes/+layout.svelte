<script lang="ts">
	import '../app.css'
	import Nav from '../components/nav.svelte'
	import type { LayoutData } from './$types'
	import { state } from '$lib'

	export let data: LayoutData

	$: loggedIn = !!data.user?.name

	$: verified = !!data.user?.verified

	async function sendVerificationEmail() {
		const res = await fetch('/api/verify', { method: 'POST' })
		if (res.ok) {
			$state.verificationSent = true
		}
	}
</script>

<svelte:head>
	<title>Buildy Boys</title>
</svelte:head>

<!-- <div class="dark:bg-slate-700 min-h-screen"> -->
<div class={$state.darkMode ? 'dark bg-slate-700 min-h-screen' : null}>
	{#if !verified && !$state.hideBanner}
		<div
			class={'h-14 flex justify-end items-center gap-2 ' +
				($state.verificationSent ? 'bg-green-100' : 'bg-red-100')}
		>
			<p class="text-primary-dark text-xl">
				{$state.verificationSent ? 'Verification email sent.' : 'Your email is not verified yet.'}
			</p>
			<button on:click={sendVerificationEmail} class="text-xl text-primary hover:text-primary-light"
				>Resend verification email</button
			>
			<button
				on:click={() => ($state.hideBanner = true)}
				class="text-xl text-primary hover:text-primary-light text-right px-6">X</button
			>
		</div>
	{/if}

	<Nav {loggedIn} userName={data.user?.name} />

	<slot />
</div>
