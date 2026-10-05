import { useEffect, useState } from 'react'
import { PageHeader } from '../layouts/PageHeader'
import { Spinner } from '../components/ui'
import { StatsGrid } from '../components/dashboard/StatsGrid'
import { PropertiesByLocation } from '../components/dashboard/PropertiesByLocation'
import { RegistrationsTrendChart } from '../components/dashboard/RegistrationsTrendChart'
import { dashboardService } from '../services/dashboardService'
import type { DashboardStats } from '../types/dashboard'
export const DashboardPage = () => { const [s, setS] = useState<DashboardStats>(); useEffect(() => { dashboardService.stats().then(setS) }, [])
  return <><PageHeader title="Administrative Dashboard" subtitle="Strategic directory overview and growth statistics" />
    {!s ? <div className="empty"><Spinner /> Loading...</div> : <><StatsGrid s={s} /><div className="grid g2"><PropertiesByLocation rows={s.byCity} /><RegistrationsTrendChart data={s.trend} /></div></>}</> }