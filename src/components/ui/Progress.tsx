import type { HTMLAttributes } from "react";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number,
  max?: number
}

function Progress({
  className="",
  value,
  max= 100,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max(value / max * 100, 0), 100);

  return(
    <div
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={max}
    className={`
      h-2 
      w-full
      rounded-full
      bg-muted
      overflow-hidden
   `}
    {...props}
    >
      <div 
       className={`h-full w-full bg-primary rounded-full transition duration-300 ${className}`}
       style={{ width: `${percentage}%` }}  />
    </div>
  )
}

export default Progress;