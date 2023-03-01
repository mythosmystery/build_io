import { serialize } from '$lib'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals: { user, pb } }) => {
	if (user && pb.authStore.isValid) return { user: serialize(user) }
	return { user: null }
}
