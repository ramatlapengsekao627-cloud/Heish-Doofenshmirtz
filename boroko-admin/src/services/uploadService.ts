import { MAX_UPLOAD_BYTES } from '../utils/constants'
/** Validates + reads the file locally with simulated progress. Replace with a real upload (returns the hosted URL). */
export const uploadService = {
  async upload(f: File, onProgress?: (pct: number) => void) {
    if (!f.type.startsWith('image/')) throw new Error('Only image files are allowed')
    if (f.size > MAX_UPLOAD_BYTES) throw new Error('File exceeds 10MB limit')
    const data = await new Promise<string>(r => { const fr = new FileReader(); fr.onload = () => r(fr.result as string); fr.readAsDataURL(f) })
    for (let p = 0; p < 100; p += 25) { onProgress?.(p); await new Promise(r => setTimeout(r, 120)) }
    onProgress?.(100); return data },
}