<script lang="ts">
	import { onMount } from 'svelte'
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import {state} from '../utils/state';

	onMount(async () => {
		await $state.init()
	})
</script>

<svelte:head>
	<title>Buildy Boys</title>
</svelte:head>
<Nav />
<slot />
