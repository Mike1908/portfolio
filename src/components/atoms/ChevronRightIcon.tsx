export type ChevronRightIconProps = {
  readonly className?: string;
  readonly size?: number;
  readonly strokeWidth?: number;
};

export const ChevronRightIcon = ({
  className,
  size = 24,
  strokeWidth = 2,
}: ChevronRightIconProps) => {
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
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};
