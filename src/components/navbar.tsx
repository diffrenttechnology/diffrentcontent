import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}
      >
        {children}
      </nav>
    )
  }
)

interface NavbarContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const NavbarContainer = forwardRef<HTMLDivElement, NavbarContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('container flex h-14 items-center', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mr-4 flex', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const NavbarContent = forwardRef<HTMLDivElement, NavbarContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-1 items-center justify-between', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
) 