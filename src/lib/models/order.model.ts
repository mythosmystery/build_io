import type { Address } from './address.model'
import type { Product } from './product.model'
import type { User } from './user.model'

export interface Order {
    id: string
    status: 'shopping' | 'pending' | 'paid' | 'backorder' | 'building' | 'shipped' | 'delivered' | 'cancelled'
    stripeId?: string
    products: string[]
    user: string
    shippingAddress: string
    billingAddress: string
    expand?: {
        products?: Product[]
        user?: User
        shippingAddress?: Address
        billingAddress?: Address
    }
}