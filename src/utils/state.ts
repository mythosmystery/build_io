import PocketBase from 'pocketbase'
import type { Record, Admin } from 'pocketbase'
import { writable } from 'svelte/store'

export class State {
	pb: PocketBase | null = null
	auth: Record | Admin | null = null
	loggedIn = false

	async init() {
		const res = await fetch('/api/pb')
		const { url, authStore } = await res.json()
		this.pb = new PocketBase(url, authStore)
		this.auth = authStore.model || authStore.baseModel || this.pb.authStore.model
		this.loggedIn = !!this.auth?.id
		console.log(this)
	}
}

export const state = writable(new State())
