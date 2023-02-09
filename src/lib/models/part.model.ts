import type { Product } from './product.model'

export interface Part {
    id: string
    make: string
    model: string
    type: 'case' | 'motherboard' | 'ram' | 'cpu' | 'gpu' | 'psu' | 'storage' | 'cooling' | 'peripheral' | 'other'
    cost?: number
    retail?: number
    image?: string
    stripeId: string
    products: string[]
    expand?: {
        products?: Product[]
    }
}