<script lang="ts">
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import type { LayoutData } from './$types'

	export let data: LayoutData

	let loggedIn = !!data.user?.name
</script>

<svelte:head>
	<title>Buildy Boys</title>
</svelte:head>
<Nav {loggedIn} />
<slot />
