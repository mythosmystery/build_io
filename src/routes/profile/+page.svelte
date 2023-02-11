<script lang="ts">
	import { redirect } from '@sveltejs/kit'
    import type { PageData } from './$types'
    export let data: PageData

    if (!data.user) {
        throw redirect(303, '/login')
    }
</script>

<h1 class="text-center text-3xl font-thin text-primary-light my-12">Profile</h1>

<div class="flex justify-around gap-8">
    <pre>{JSON.stringify(data.user, null, 2)}</pre>
    <div class="p-8 rounded-md shadow-md">
        <p class="text-xl italic">{data.user?.name} ({data.user?.username})</p>
        <p class="text-xl italic">{data.user?.email}</p>
    </div>
</div> 