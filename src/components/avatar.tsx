import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  initials?: string
  square?: boolean
  className?: string
  alt?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, initials, square = false, className, alt = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-10 w-10 shrink-0 overflow-hidden',
          square ? 'rounded-lg' : 'rounded-full',
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
          />
        ) : initials ? (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm font-medium">{initials}</span>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm font-medium">?</span>
          </div>
        )}
      </div>
    )
  }
) 