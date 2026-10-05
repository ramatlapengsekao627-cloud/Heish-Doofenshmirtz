import { Routes, Route, Outlet } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { DashboardPage } from '../pages/DashboardPage'
import { GuesthouseListPage } from '../pages/GuesthouseListPage'
import { GuesthouseCreatePage } from '../pages/GuesthouseCreatePage'
import { GuesthouseDetailPage } from '../pages/GuesthouseDetailPage'
import { GuesthouseEditPage } from '../pages/GuesthouseEditPage'
import { AdminListPage } from '../pages/AdminListPage'
import { AdminCreatePage } from '../pages/AdminCreatePage'
import { AdminEditPage } from '../pages/AdminEditPage'
import { NotFoundPage } from '../pages/NotFoundPage'

const ProtectedRoute = () => <Outlet />
const AdminLayout = () => <Outlet />

export const AppRoutes = () => <Routes>
  <Route path="/login" element={<LoginPage />} /><Route path="/forgot-password" element={<ForgotPasswordPage />} />
  <Route element={<ProtectedRoute />}><Route element={<AdminLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="guesthouses" element={<GuesthouseListPage />} /><Route path="guesthouses/new" element={<GuesthouseCreatePage />} />
    <Route path="guesthouses/:id" element={<GuesthouseDetailPage />} /><Route path="guesthouses/:id/edit" element={<GuesthouseEditPage />} />
    <Route path="admins" element={<AdminListPage />} /><Route path="admins/new" element={<AdminCreatePage />} /><Route path="admins/:id/edit" element={<AdminEditPage />} />
  </Route></Route>
  <Route path="*" element={<NotFoundPage />} />
</Routes>