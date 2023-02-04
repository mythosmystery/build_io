import { env } from '$env/dynamic/private'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ locals: { pb } }) => {
	if (env.PB_URL) return json({ url: env.PB_URL, authStore: pb.authStore })
	return json({ url: 'http://localhost:8090', authStore: pb.authStore })
}

export const POST: RequestHandler = async ({ locals: { pb } }) => {
	pb.authStore.clear()
	return json({ status: 'ok' })
}
