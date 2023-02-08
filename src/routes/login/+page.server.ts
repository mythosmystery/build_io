import { redirect } from '@sveltejs/kit'
import { fromFormData } from '$lib'
import type { Actions } from './$types'

type Login = {
	username: string
	password: string
}

export const actions: Actions = {
	default: async ({ request, locals: { pb } }) => {
		const { password, username }: Login = await fromFormData(request)
		try {
			await pb.collection('users').authWithPassword(username, password)
		} catch (e: any) {
			return { error: e.message }
		}
		throw redirect(302, '/')
	}
}
