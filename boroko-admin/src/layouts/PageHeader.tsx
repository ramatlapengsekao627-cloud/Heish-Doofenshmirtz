import type { ReactNode } from 'react'
export const PageHeader = ({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) =>
  <div className="head"><div><h1>{title}</h1><p className="mu">{subtitle}</p></div><div className="row" style={{ flex: 'none' }}>{actions}</div></div>