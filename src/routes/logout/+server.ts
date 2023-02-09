import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals: { pb, user } }) => {
    pb.authStore.clear()
    throw redirect(303, '/')
}