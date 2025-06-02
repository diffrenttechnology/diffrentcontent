import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        {children}
      </div>
    )
  }
)

interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType
}

export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ as: Component = 'button', className, ...props }, ref) => {
    return <Component ref={ref} className={cn('', className)} {...props} />
  }
)

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchor?: 'top start' | 'top end' | 'bottom start' | 'bottom end'
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, className, anchor = 'bottom start', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          anchor === 'top start' && 'bottom-full left-0 mb-1',
          anchor === 'top end' && 'bottom-full right-0 mb-1',
          anchor === 'bottom start' && 'top-full left-0 mt-1',
          anchor === 'bottom end' && 'top-full right-0 mt-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface DropdownItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ children, className, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)

export const DropdownLabel = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('ml-2 text-sm font-medium', className)}
      {...props}
    />
  )
})

export const DropdownDivider = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('my-1 h-px bg-border', className)}
      {...props}
    />
  )
}) 