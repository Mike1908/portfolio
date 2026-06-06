import { cn } from "@/lib/utils";

export type SkillTagProps = {
  readonly label: string;
  readonly featured?: boolean;
  readonly className?: string;
};

export const SkillTag = ({ label, featured = false, className }: SkillTagProps) => {
  return (
    <span
      className={cn(
        "inline-block cursor-default rounded-badge border px-4 py-2 font-body transition-all duration-300 ease-spring hover:scale-[1.04]",
        featured
          ? "border-[#1A1B14] bg-[#1A1B14] text-[#F7F5F0] hover:border-border hover:bg-transparent hover:text-[#3D3A33] dark:border-[#F2EFE9] dark:bg-[#F2EFE9] dark:text-[#111010] dark:hover:bg-transparent dark:hover:border-border dark:hover:text-[#CBC3B8]"
          : "border-border bg-transparent text-body hover:border-[#1A1B14] hover:bg-[#1A1B14] hover:text-[#F7F5F0] dark:hover:border-[#F2EFE9] dark:hover:bg-[#F2EFE9] dark:hover:text-[#111010]",
        className,
      )}
      style={{ fontSize: "0.82rem" }}
    >
      {label}
    </span>
  );
};
