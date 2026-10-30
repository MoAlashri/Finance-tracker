import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-lg
        border
        border-border
        bg-card
        text-card-foreground
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;