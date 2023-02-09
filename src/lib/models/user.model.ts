import type { Order } from './order.model'

export interface User {
    id: string
    name: string
    username: string
    email: string
    password: string
    stripeId?: string
    pastOrders: string[]
    activeOrder?: string
    created: Date
    updated: Date
    expand?: {
        pastOrders?: Order[]
        activeOrder?: Order
    }
}