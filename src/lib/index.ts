import { writable } from 'svelte/store'

export async function fromFormData<T>(req: Request): Promise<T> {
	const data = await req.formData()
	return Object.fromEntries(data.entries()) as T
}

export function serialize<T>(data: T): T {
	return JSON.parse(JSON.stringify(data))
}

export class State {
	verificationSent = false
	darkMode = false
	hideBanner = false

	constructor() {
		if(typeof localStorage !== 'undefined') {
			const data = localStorage.getItem('state')
			const state = data ? JSON.parse(data) : null
			if(state) Object.assign(this, state)
		}
	}
}

export const state = writable(new State())

state.subscribe(v => {
	if(typeof localStorage !== 'undefined') {
		localStorage.setItem('state', JSON.stringify(v))
	}
})
