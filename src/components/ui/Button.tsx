import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' ;

type ButtonSize = 'sm'| 'md' | 'lg' ;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary : 'bg-primary text-primary-forgeround hover:opacity-90',
  secondary : 'bg-secondary text-secondary-forgeround hover:opacity-90',
  outline : 'border border-border bg-transparent hover:bg-muted',
  ghost : 'bg-transparent hover:bg-muted',
  danger: 'bg-dager text-white hover:opacity-90',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm :"h-8 px-3 text-sm",
  md :"h-10 px-4 text-base",
  lg :"h-12 px-6 text-lg",
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className= "",
  ...props
}: ButtonProps) {
  return (
   <button  className ={`
    items-center 
    inline-flex
    gap-2
    justify-center
    rounded-md
    font-medium
    transition-opacity
    disaple:pointer-events-none
    disabled:opacity-50
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
    `}
    {...props}/>
    
  )
}
