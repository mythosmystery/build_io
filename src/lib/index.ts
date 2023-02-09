export async function fromFormData<T>(req: Request): Promise<T> {
	const data = await req.formData()
	return Object.fromEntries(data.entries()) as T
}

export function serialize<T>(data: T): T {
	return JSON.parse(JSON.stringify(data))
}
