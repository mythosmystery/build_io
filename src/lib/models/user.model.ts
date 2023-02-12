import type { Address } from './address.model'
import type { Order } from './order.model'

export interface User {
    id: string
    name: string
    username: string
    email: string
    phone: string
    password: string
    stripeId?: string
    verified: boolean
    pastOrders: string[]
    activeOrder?: string
    created: Date
    updated: Date
    addresses: string[]
    expand?: {
        pastOrders?: Order[]
        activeOrder?: Order
        addresses?: Address[]
    }
}