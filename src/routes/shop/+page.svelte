<script lang="ts">
	import Icon from '@iconify/svelte'
    import type { PageData } from './$types'
    export let data: PageData
</script>

<h1 class="text-center text-3xl font-thin text-green-600 my-12">Shop</h1>

<div class="flex flex-row flex-wrap justify-center gap-8 my-12">
{#each data.products as product}
  <div class="rounded-lg p-8 w-1/4 shadow-md">
    <h2 class="text-green-700 text-xl">{product.title}</h2>
    <p class="italic">{product.blurb}</p>
    <img src={product.images?.at(0)} alt={product.title} class="w-3/4 mx-auto my-3 object-cover" />
    <p class="text-center">{product.description}</p>
    <div class="flex justify-between">
      <p class="mt-4">{((product.retail || 100) / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
      <button class="hover:text-green-400 text-green-600">
        <Icon icon="mdi:cart-plus" class="w-6 h-6 mt-4" />
      </button>
    </div>
  </div>
{/each}
</div>
  