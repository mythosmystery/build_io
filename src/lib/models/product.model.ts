import type { Part } from './part.model'

export interface Product {
	id: string
	title: string
	description: string
	blurb: string
	retail?: number
	cost?: number
	images?: string[]
	stripeId: string
	parts: string[]
	expand?: {
		parts?: Part[]
	}
}
