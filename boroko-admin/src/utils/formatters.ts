export const currency = (p: string | number, c: string) => `${c} ${Number(p).toLocaleString()}`
export const formatDate = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
export const today = () => new Date().toISOString().slice(0, 10)