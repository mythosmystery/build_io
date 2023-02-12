<script lang="ts">
	import { redirect } from '@sveltejs/kit'
	import { formatPhone } from '$lib/helpers'
	import type { PageData } from './$types'
	export let data: PageData

	if (!data.user) {
		throw redirect(303, '/login')
	}
</script>

<div class="flex justify-around gap-8 mt-12">
	<div class="p-8 rounded-md shadow-md">
		<h4 class="text-2xl font-thin text-primary-light mb-4">Profile</h4>
		<p class="text-xl italic">{data.user?.name} ({data.user?.username})</p>
		<p class="text-lg italic">{data.user?.email}</p>
		<p class="italic">{formatPhone(data.user?.phone)}</p>
		{#if !data.addresses?.length}
			<p class="text-xl italic">No addresses</p>
		{:else}
			<ul class="mt-4">
				{#each data.addresses as address}
					<li>{address.street},</li>
					<li>{address.city},</li>
					<li>{address.state}, {address.zip}</li>
				{/each}
			</ul>
		{/if}
	</div>
	<pre>{JSON.stringify(data.user, null, 2)}</pre>
</div>
