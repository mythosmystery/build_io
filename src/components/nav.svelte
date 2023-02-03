<script lang="ts">
	import { page } from '$app/stores';

	$: links = ['home', 'about', 'shop', 'login'].map((link) => ({
		href: `/${link === 'home' ? '' : link}`,
		text: link,
		active: `/${link}` === $page.url.pathname
	}));
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
	</div>
</nav>
