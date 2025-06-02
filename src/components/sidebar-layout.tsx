import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface SidebarLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SidebarLayout = forwardRef<HTMLDivElement, SidebarLayoutProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('min-h-screen', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface SidebarLayoutContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SidebarLayoutContent = forwardRef<HTMLDivElement, SidebarLayoutContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('lg:pl-64', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
) 