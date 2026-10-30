import type {HTMLAttributes} from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

function Skeleton({
  className = "",
  ...props
}: SkeletonProps) {
  return (
    <div
    aria-hidden="true"
    className={`bg-muted  animate-pulse ${className} `}
    {...props}
    />
  )
}

export default Skeleton;