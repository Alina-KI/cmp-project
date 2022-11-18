export const normalizeNumber = (value: string) => value
    .replace('.', ',')
    .replace(',,', ',')
    .replace(/[^0-9,]/g, '')