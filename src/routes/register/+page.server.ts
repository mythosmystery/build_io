import { redirect } from '@sveltejs/kit'
import { fromFormData } from '../../utils/types'
import type { Actions } from './$types'

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
			await pb.collection('users').create(r)
		} catch (e: any) {
			return { error: e.message }
		}
		throw redirect(302, '/login')
	}
}
