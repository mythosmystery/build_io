import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ locals: { pb, user } }) => {
	if (!user) return json({ error: 'User not found' }, { status: 401 })
	try {
		await pb.collection('users').requestVerification(user.email)
		return json({ success: true })
	} catch (e: any) {
		return json({ error: e.message }, { status: 500 })
	}
}
