export type ChevronLeftIconProps = {
  readonly className?: string;
  readonly size?: number;
  readonly strokeWidth?: number;
};

export const ChevronLeftIcon = ({
  className,
  size = 12,
  strokeWidth = 2.5,
}: ChevronLeftIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
};
