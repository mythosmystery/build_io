<script lang="ts">
	import Icon from '@iconify/svelte'
	import type { Product } from '$lib/models/product.model'
	import type { PageData } from './$types'
	import { getNotificationsContext } from 'svelte-notifications'
	import { notImplementedNotification } from '$lib/helpers'
	export let data: PageData

	const { addNotification } = getNotificationsContext()

	async function addToCart(product: Product) {
		notImplementedNotification(addNotification)
	}
</script>

<h1 class="text-center text-3xl font-thin text-primary-light my-12">Shop our computers</h1>

<div class="flex flex-row flex-wrap justify-center gap-8 my-12">
	{#each data.products as product}
		<div class="rounded-lg p-8 w-1/4 shadow-md">
			<h2 class="text-primary-dark dark:text-primary-light text-xl">{product.title}</h2>
			<p class="dark:text-white italic">{product.blurb}</p>
			<img
				src={product.images?.at(0)}
				alt={product.title}
				class="w-3/4 mx-auto my-3 object-cover"
			/>
			<p class="text-center dark:text-white">{product.description}</p>
			<div class="flex justify-between">
				<p class="mt-4 dark:text-white">
					{((product.retail || 100) / 100).toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD'
					})}
				</p>
				<button
					on:click={async () => await addToCart(product)}
					class="hover:text-primary-light text-primary"
					title="Add to cart"
				>
					<Icon
						icon="mdi:cart-plus"
						class="w-8 h-8 mt-4 hover:scale-110 active:scale-90 transition-all ease-in"
					/>
				</button>
			</div>
		</div>
	{/each}
</div>
