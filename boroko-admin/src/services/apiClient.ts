/** Mock backend. Replace get/set with fetch/axios calls to your API (base URL from import.meta.env.VITE_API_URL). */
const wait = (ms: number) => new Promise(r => setTimeout(r, ms))
export const uid = () => Math.random().toString(36).slice(2, 9)
export const apiClient = {
  async get<T>(key: string, seed: T): Promise<T> { await wait(200); try { const v = localStorage.getItem('boroko.' + key); return v ? JSON.parse(v) : seed } catch { return seed } },
  async set<T>(key: string, value: T): Promise<T> { await wait(100); try { localStorage.setItem('boroko.' + key, JSON.stringify(value)) } catch { /* storage full */ } return value },
}