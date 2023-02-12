export function formatPhone(phone: string | undefined) {
    return phone ? phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : 'No phone number'
}