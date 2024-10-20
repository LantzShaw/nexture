import { ReactNode } from 'react'

export default function DashboardLayout({
  children,
  team,
  analytics,
}: {
  children: ReactNode
  team: ReactNode
  analytics: ReactNode
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
