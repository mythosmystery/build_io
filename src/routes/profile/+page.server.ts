import { fromFormData, serialize } from '$lib'
import type { User } from '$lib/models/user.model'
import { json, redirect } from '@sveltejs/kit'
import type { Address } from '$lib/models/address.model'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { user, pb } }) => {
	if (user?.addresses?.length) {
		try {
			const expandedUser = await pb
				.collection('users')
				.getOne<User>(user.id, { expand: 'addresses' })
			return {
				user: serialize(expandedUser)
			}
		} catch (e: any) {
			console.error(e)
			throw redirect(301, '/')
		}
	}
}

type AddressData = {
	street: string
	city: string
	state: string
	zip: string
	streetTwo?: string
	notes?: string
	nickname?: string
}

export const actions = {
	addAddress: async ({ request, locals: { pb, user } }) => {
		const formData = await fromFormData<AddressData>(request)

		if (!user) throw new Error('User not found')

		const data = { ...formData, user: user.id }

		try {
			const res = await pb.collection('addresses').create<Address>(data)
			await pb.collection('users').update<User>(user.id, { addresses: [...user.addresses, res.id] })
		} catch (e: any) {
			return { error: e.message }
		}
		return { success: true }
	},
	deleteAddress: async ({ request, locals: { pb, user } }) => {
		if (!user) throw new Error('User not found')

		const { id } = await fromFormData<{ id: string }>(request)
		try {
			await pb.collection('addresses').delete(id)
			await pb
				.collection('users')
				.update<User>(
					user.id,
					{ addresses: user.addresses.filter((a) => a !== id) },
					{ expand: 'addresses' }
				)
			return { success: true }
		} catch (e: any) {
			console.error(e)
			return { error: e.message }
		}
	}
} satisfies Actions
