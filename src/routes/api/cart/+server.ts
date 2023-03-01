import { json } from '@sveltejs/kit'
import type { Order } from '$lib/models/order.model'
import type { RequestHandler } from './$types'
export const PUT: RequestHandler = async ({ locals: { pb, user }, request }) => {
	const { id } = (await request.json()) as { id: string }

	try {
		if (!id) throw new Error('No id provided')
		if (!user) throw new Error('User not found')
	} catch (e: any) {
		return json({ error: e.message }, { status: 500 })
	}

	return json({ success: true })
}
