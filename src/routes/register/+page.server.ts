import { redirect } from '@sveltejs/kit'
import { fromFormData } from '$lib'
import type { Actions } from './$types'
import type { User } from '$lib/models/user.model'

type Register = {
	name: string
	username: string
	email: string
	password: string
}

export const actions: Actions = {
	default: async ({ request, locals: { pb } }) => {
		const r: Register = await fromFormData(request)
		try {
			await pb.collection('users').create<User>(r)
		} catch (e: any) {
			return { error: e.message }
		}
		throw redirect(302, '/login')
	}
}
