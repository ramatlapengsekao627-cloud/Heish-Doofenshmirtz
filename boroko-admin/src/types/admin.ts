export type AdminRole = 'Admin' | 'Super Admin'
export type AdminStatus = 'Active' | 'Suspended'
export interface AdminUser { id: string; name: string; email: string; role: AdminRole; status: AdminStatus; created: string; password: string }
export type AdminFormValues = Pick<AdminUser, 'name' | 'email' | 'role' | 'password'>