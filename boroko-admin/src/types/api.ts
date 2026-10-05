export interface ApiResponse<T> { data: T; message?: string }
export interface Page<T> { items: T[]; total: number; page: number }