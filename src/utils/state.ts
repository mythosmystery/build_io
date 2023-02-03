import PocketBase, { Record, Admin } from 'pocketbase'
import { writable } from 'svelte/store'

export class State {
	pb: PocketBase
	auth: Record | Admin | null = null

	constructor() {
		this.pb = new PocketBase('http://pocketbase:8080')
		this.auth = this.pb.authStore.model
	}
}

export const state = writable(new State())
