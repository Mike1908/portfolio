"use client";

import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export type CustomCursorProps = {
  readonly size?: "default" | "large";
  readonly blendMode?: "difference" | "exclusion" | "multiply" | "screen";
};

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

const emptySubscribe = () => () => {};

export const CustomCursor = ({
  size = "default",
  blendMode = "difference",
}: CustomCursorProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  // Détecte si on est côté client
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Vérifie si le curseur doit être désactivé
  const shouldShow = useSyncExternalStore(
    emptySubscribe,
    () => {
      if (typeof window === "undefined") return false;
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return !hasCoarsePointer && !prefersReducedMotion;
    },
    () => false
  );

  useEffect(() => {
    if (!shouldShow) return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        // Point suit directement
        cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;

        // Ring suit avec lag (lerp 0.12)
        ringPositionRef.current.x = lerp(
          ringPositionRef.current.x,
          positionRef.current.x,
          0.12
        );
        ringPositionRef.current.y = lerp(
          ringPositionRef.current.y,
          positionRef.current.y,
          0.12
        );

        ringRef.current.style.transform = `translate(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter, true);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter, true);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldShow]);

  if (!mounted || !shouldShow) return null;

  const pointSize = size === "large" ? 14 : 10;
  const ringSize = isHovering ? 48 : size === "large" ? 40 : 36;

  return (
    <>
      {/* Point central */}
      <div
        ref={cursorRef}
        className={cn("pointer-events-none fixed left-0 top-0 z-[99999]")}
        style={{
          width: `${pointSize}px`,
          height: `${pointSize}px`,
          marginLeft: `-${pointSize / 2}px`,
          marginTop: `-${pointSize / 2}px`,
          mixBlendMode: blendMode,
        }}
      >
        <div className="h-full w-full rounded-full bg-primary" />
      </div>

      {/* Ring avec lag */}
      <div
        ref={ringRef}
        className={cn("pointer-events-none fixed left-0 top-0 z-[99999]")}
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          marginLeft: `-${ringSize / 2}px`,
          marginTop: `-${ringSize / 2}px`,
          mixBlendMode: blendMode,
          transition: "width 200ms, height 200ms",
        }}
      >
        <div className="h-full w-full rounded-full border-2 border-primary" />
      </div>
    </>
  );
};
