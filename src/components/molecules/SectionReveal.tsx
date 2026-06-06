"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export type SectionRevealProps = {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly once?: boolean;
  readonly className?: string;
};

export const SectionReveal = ({
  children,
  delay = 0,
  once = true,
  className,
}: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
