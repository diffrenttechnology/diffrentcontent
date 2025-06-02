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

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex h-14 items-center border-b px-4', className)}
        {...props}
      >
        {children}
      </div>
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

interface SidebarHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export const SidebarHeading = forwardRef<HTMLHeadingElement, SidebarHeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn('mb-2 px-2 text-lg font-semibold tracking-tight', className)}
        {...props}
      >
        {children}
      </h2>
    )
  }
)

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  active?: boolean
}

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ children, className, active, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center rounded-md px-3 py-2 text-sm font-medium',
          active
            ? 'bg-accent text-accent-foreground'
            : 'hover:bg-accent hover:text-accent-foreground',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
) 