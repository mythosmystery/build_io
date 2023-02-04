export async function fromFormData<T>(req: Request): Promise<T> {
	const data = await req.formData()
	return Object.fromEntries(data.entries()) as T
}
