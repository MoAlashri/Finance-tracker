import type {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({
  className ="",
  ...Props
}: InputProps) {
  return (
    <input className = {`
      flex
      h-10
      w-full
      rounded-md
      border
      border-boreder
      bg-background
      text-sm
      text-foreground
      px-3
      py-2
      outline-none
      transtion
      focus:ring-2
      focus:ring-primary/30
      disabled:cursor-not-allowed
      diabled:opacity-50
      placeholder:text-muted-foreground
      ${className}
      `}{...Props} /> 
  )
}

export default Input;