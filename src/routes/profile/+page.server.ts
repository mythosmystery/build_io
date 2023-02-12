import { serialize } from '$lib';
import type { User } from '$lib/models/user.model';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals: {user, pb}}) => {
    if(user?.addresses?.length) {
        try {
            const expandedUser = await pb.collection('users').getOne<User>(user.id, {expand: 'addresses'})
            return {
                user: serialize(expandedUser)
            }
        } catch(e: any) {
            console.error(e)
            throw redirect(301, '/')
        }
    }
}