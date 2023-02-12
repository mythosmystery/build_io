import type { Product } from '$lib/models/product.model';
import { serialize } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: {pb}}) => {
    try {
        const {items} = await pb.collection('products').getList<Product>()
        return {
        products: serialize(items.map(item => ({...item, images: item.images?.map(image => pb.getFileUrl(item as any, image))})))
    }
    } catch(e: any) {
        console.error(e)
        return {
            products: [],
            error: e?.message
        }
    }
}