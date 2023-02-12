<script lang="ts">
	import '../app.css'
	import Nav from '../components/nav.svelte'
	import type { LayoutData } from './$types'
	import { state } from '$lib'
	import Notifications from 'svelte-notifications'

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

<Notifications>
	<!-- <div class="dark:bg-slate-700 min-h-screen"> -->
	<div class={$state.darkMode ? 'dark bg-slate-700 min-h-screen' : null}>
		{#if !verified && !$state.hideBanner}
			<div
				class={'h-14 flex justify-end items-center gap-2 ' +
					($state.verificationSent
						? 'bg-green-100 dark:bg-green-400/20'
						: 'bg-red-100 dark:bg-red-500/20')}
			>
				<div class="flex flex-col sm:flex-row">
					<p class="text-primary-dark dark:text-white text-xl mr-2">
						{$state.verificationSent
							? 'Verification email sent.'
							: 'Your email is not verified yet.'}
					</p>
					<button
						on:click={sendVerificationEmail}
						class="text-xl text-primary dark:text-primary-light dark:hover:text-secondary-light hover:text-primary-light"
						>Resend verification email</button
					>
				</div>
				<div class="w-1/4" />
				<button
					on:click={() => ($state.hideBanner = true)}
					class="text-xl text-primary dark:text-primary-light dark:hover:text-primary hover:text-primary-light text-right px-6"
					>X</button
				>
			</div>
		{/if}

		<Nav {loggedIn} userName={data.user?.name} />

		<slot />
	</div>
</Notifications>
