import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r bg-background lg:flex',
          className
        )}
        {...props}
      >
        {children}
      </aside>
    )
  }
)

interface SidebarBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SidebarBody = forwardRef<HTMLDivElement, SidebarBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex-1 overflow-auto p-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('border-t p-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
) 