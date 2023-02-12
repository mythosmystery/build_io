import { redirect } from '@sveltejs/kit'
import { fromFormData } from '$lib'
import type { Actions } from './$types'
import type { User } from '$lib/models/user.model'

type Register = {
	name: string
	username: string
	email: string
	password: string
	passwordConfirm: string
}

export const actions = {
	default: async ({ request, locals: { pb } }) => {
		const r: Register = await fromFormData(request)
		try {
			await pb.collection('users').create<User>(r)
			await pb.collection('users').requestVerification(r.email)
		} catch (e: any) {
			return { error: e.message }
		}
		throw redirect(302, '/login')
	}
} satisfies Actions


