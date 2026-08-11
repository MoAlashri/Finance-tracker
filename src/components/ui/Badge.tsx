import type { HTMLAttributes } from "react";

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' ;

interface BadgeProps extends HTMLAttributes<HTMLDivElement>  {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default : "bg-muted text-muted-foreground",
  success : "bg-success/10 text-sucess",
  warning : "bg-warning/10 text-warning",
  danger : "bg-danger/10 text-error",
}

function Badge({variant = "default", className="", children, ...props}: BadgeProps) {
  return (
    <span className={
      `inline-flex
      items-center
      rounded-full
      px-2.5 
      py-1 
      text-xs 
      font-medium 
      ${variantStyles[variant]} 
      ${className}`} 
      {...props}>
        {children}
    </span>
  )
}

export default Badge;