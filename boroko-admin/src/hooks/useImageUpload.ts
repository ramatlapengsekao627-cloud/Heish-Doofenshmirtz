import { useState } from 'react'
import { uploadService } from '../services/uploadService'
import { uid } from '../services/apiClient'
export interface UploadItem { id: string; name: string; pct: number; err?: string }
export function useImageUpload(onDone: (url: string) => void) {
  const [items, setItems] = useState<UploadItem[]>([])
  const upload = (files: FileList | File[]) => Array.from(files).forEach(async f => {
    const id = uid(); setItems(x => [...x, { id, name: f.name, pct: 0 }])
    const patch = (p: Partial<UploadItem>) => setItems(x => x.map(i => i.id === id ? { ...i, ...p } : i))
    try { onDone(await uploadService.upload(f, pct => patch({ pct }))) } catch (e) { patch({ err: (e as Error).message }) } })
  return { items, upload }
}