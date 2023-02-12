import { serialize } from '../../lib';
import type { Address } from '../../lib/models/address.model';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals: {user, pb}}) => {
    if(user?.addresses?.length) {
        const promises = user.addresses.map(a => pb.collection('addresses').getOne<Address>(a))
        const addresses = await Promise.all(promises)
        return {
            addresses: serialize(addresses)
        }
    }
}