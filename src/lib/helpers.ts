import type { addNotification } from 'svelte-notifications'

export function formatPhone(phone: string | undefined) {
	return phone ? phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : 'No phone number'
}

export function notImplementedNotification(addNotification: addNotification) {
	addNotification({
		position: 'bottom-right',
		text: 'Not implemented yet',
		type: 'error',
		removeAfter: 2000
	})
}
