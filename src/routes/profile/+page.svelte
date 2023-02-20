<script lang="ts">
	import { redirect } from '@sveltejs/kit'
	import { formatPhone, notImplementedNotification } from '$lib/helpers'
	import type { PageData } from './$types'
	import Icon from '@iconify/svelte'
	import { getNotificationsContext } from 'svelte-notifications'

	const { addNotification } = getNotificationsContext()

	export let data: PageData

	let showAddressForm = false

	if (!data.user) {
		throw redirect(303, '/login')
	}
</script>

<div class="flex justify-around gap-8 mt-12 dark:text-white">
	<div class="flex flex-col-reverse gap-8">
		{#if showAddressForm}
			<form method="post" action="?/addAddress" class="shadow-md flex flex-col p-4 mb-12">
				<input
					type="text"
					name="nickname"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="Nickname (Optional)"
				/>
				<input
					type="text"
					name="street"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="Street Address"
				/>
				<input
					type="text"
					name="city"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="City"
				/>
				<select
					name="state"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
				>
					<option value="AL">Alabama</option>
					<option value="AK">Alaska</option>
					<option value="AZ">Arizona</option>
					<option value="AR">Arkansas</option>
					<option value="CA">California</option>
					<option value="CO">Colorado</option>
					<option value="CT">Connecticut</option>
					<option value="DE">Delaware</option>
					<option value="DC">District Of Columbia</option>
					<option value="FL">Florida</option>
					<option value="GA">Georgia</option>
					<option value="HI">Hawaii</option>
					<option value="ID">Idaho</option>
					<option value="IL">Illinois</option>
					<option value="IN">Indiana</option>
					<option value="IA">Iowa</option>
					<option value="KS">Kansas</option>
					<option value="KY">Kentucky</option>
					<option value="LA">Louisiana</option>
					<option value="ME">Maine</option>
					<option value="MD">Maryland</option>
					<option value="MA">Massachusetts</option>
					<option value="MI">Michigan</option>
					<option value="MN">Minnesota</option>
					<option value="MS">Mississippi</option>
					<option value="MO">Missouri</option>
					<option value="MT">Montana</option>
					<option value="NE">Nebraska</option>
					<option value="NV">Nevada</option>
					<option value="NH">New Hampshire</option>
					<option value="NJ">New Jersey</option>
					<option value="NM">New Mexico</option>
					<option value="NY">New York</option>
					<option value="NC">North Carolina</option>
					<option value="ND">North Dakota</option>
					<option value="OH">Ohio</option>
					<option value="OK">Oklahoma</option>
					<option value="OR">Oregon</option>
					<option value="PA">Pennsylvania</option>
					<option value="RI">Rhode Island</option>
					<option value="SC">South Carolina</option>
					<option value="SD">South Dakota</option>
					<option value="TN">Tennessee</option>
					<option value="TX">Texas</option>
					<option value="UT">Utah</option>
					<option value="VT">Vermont</option>
					<option value="VA">Virginia</option>
					<option value="WA">Washington</option>
					<option value="WV">West Virginia</option>
					<option value="WI">Wisconsin</option>
					<option value="WY">Wyoming</option>
				</select>

				<input
					type="number"
					name="zip"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="Zip Code (5 digits)"
				/>
				<input
					type="text"
					name="streetTwo"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="Street Address Line 2 (Optional)"
				/>
				<input
					type="text"
					name="notes"
					class="p-2 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-primary-light bg-gray-100 dark:bg-slate-800 dark:text-white"
					placeholder="Notes (Optional)"
				/>
				<button type="submit" class="p-2 rounded-lg bg-primary-light text-white">Add Address</button
				>
			</form>
		{/if}
		<div class="py-8 px-20 rounded-md shadow-md">
			<h4 class="text-2xl font-thin text-primary-light mb-4">Profile</h4>
			<p class="text-xl italic">{data.user?.name} ({data.user?.username})</p>
			<p class="text-lg italic">{data.user?.email}</p>
			<p class="italic">{formatPhone(data.user?.phone)}</p>
			{#if !data.user?.expand?.addresses?.length}
				<p class="text-xl italic">No addresses</p>
			{:else}
				<div class="flex flex-col">
					{#each data.user?.expand?.addresses as address, i}
						<div class="flex hover:bg-gray-100 p-3 mt-2 dark:hover:bg-slate-600">
							<ul class="pr-10">
								<li class="text-lg italic">{address.nickname}</li>
								<li>{address.street},</li>
								<li>{address.city},</li>
								<li>{address.state}, {address.zip}</li>
							</ul>
							{#if i > 0}
								<button
									on:click={() => notImplementedNotification(addNotification)}
									class="text-red-400 m-4 hover:text-red-600"
								>
									<Icon icon="carbon:delete" height="24" />
								</button>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
			<button
				on:click={() => (showAddressForm = true)}
				class="text-lg italic mt-4 text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary"
				>Add Address</button
			>
		</div>
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
