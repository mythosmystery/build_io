<script lang="ts">
	import { redirect } from '@sveltejs/kit'
	import { formatPhone, notImplementedNotification } from '$lib/helpers'
	import type { PageData } from './$types'
	import Icon from '@iconify/svelte'
	import { getNotificationsContext } from 'svelte-notifications'

	const { addNotification } = getNotificationsContext()

	export let data: PageData

	if (!data.user) {
		throw redirect(303, '/login')
	}
</script>

<div class="flex justify-around gap-8 mt-12 dark:text-white">
	<div class="py-8 px-20 rounded-md shadow-md">
		<h4 class="text-2xl font-thin text-primary-light mb-4">Profile</h4>
		<p class="text-xl italic">{data.user?.name} ({data.user?.username})</p>
		<p class="text-lg italic">{data.user?.email}</p>
		<p class="italic">{formatPhone(data.user?.phone)}</p>
		{#if !data.user?.expand?.addresses?.length}
			<p class="text-xl italic">No addresses</p>
		{:else}
			<div class="flex justify-between items-center">
				<ul class="mt-4 border-r pr-8">
					{#each data.user?.expand?.addresses as address}
						<li class="text-lg italic">{address.nickname}</li>
						<li>{address.street},</li>
						<li>{address.city},</li>
						<li>{address.state}, {address.zip}</li>
					{/each}
				</ul>
				{#if data.user.addresses.length > 1}
					<button
						on:click={() => notImplementedNotification(addNotification)}
						class="text-red-400 m-4 hover:text-red-600"
					>
						<Icon icon="carbon:delete" height="24" />
					</button>
				{/if}
			</div>
		{/if}
		<button
			on:click={() => notImplementedNotification(addNotification)}
			class="text-lg italic mt-4 text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary"
			>Add Address</button
		>
	</div>
	<div class="flex flex-col items-center">
		{#if data.user?.activeOrder}
			<h4 class="text-2xl font-thin text-primary-light mb-4">Your Order</h4>
			<p>Current order goes here</p>
		{:else}
			<h4 class="text-2xl italic font-thin mb-6">Nothing on order</h4>
			<a
				class="text-lg mb-24 italic text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary"
				href="/shop">Shop Now</a
			>
		{/if}
		{#if data.user?.pastOrders?.length}
			<h4 class="text-2xl font-thin text-primary-light mb-4">Past Orders</h4>
			<p>Orders go here</p>
		{:else}
			<h4 class="text-2xl italic font-thin">No past orders</h4>
		{/if}
	</div>
	<!-- <pre>{JSON.stringify(data.user, null, 2)}</pre> -->
</div>
