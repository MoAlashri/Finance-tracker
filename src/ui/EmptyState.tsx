import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string ;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

function EmptyState({
  title,
  description,
  icon,
  action,
}:EmptyStateProps){
  return (
    <div className="flex flex-col items-center rounded-lg border border-border border-dashed bg-card px-6 py-12 text-center">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-card-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
export default EmptyState ;