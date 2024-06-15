"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Position = {
  top: number;
  left: number;
  width: number;
  opacity: number;
  index: number | null;
};

export function DesktopNavMenu({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const refs = useRef<(HTMLLIElement | null)[]>(
    Array.from({ length: links.length }, () => null),
  );
  const cursor = useRef<HTMLDivElement | null>(null);

  const [position, setPosition] = useState<Position | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);

  useEffect(() => {
    if (!cursor.current || !position) return;
    const style = cursor.current.style;

    if (isPositioned) {
      cursor.current.classList.add("transition-all");
    } else {
      setIsPositioned(true);
    }

    style.top = `${position.top}px`;
    style.left = `${position.left}px`;
    style.width = `${position.width}px`;
    style.opacity = `${position.opacity}`;
  }, [position]);

  function removeCursor() {
    setPosition((pv) => ({
      ...pv,
      opacity: 0,
      index: null,
    }));
  }

  function positionCursor(index: number) {
    const ref = refs.current[index];
    if (!ref) return;

    const { width, top, left } = ref.getBoundingClientRect();

    setPosition({
      top,
      left,
      width,
      opacity: 1,
      index,
    });
  }

  return (
    <ul
      onMouseLeave={removeCursor}
      className="relative hidden items-center sm:flex"
    >
      <div
        aria-label=""
        ref={cursor}
        className={cn("fixed left-0 h-10 rounded-lg bg-foreground opacity-0")}
      />
      {links.map(({ label, href }, i) => (
        <li
          className="relative"
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          onMouseEnter={() => positionCursor(i)}
          onFocus={() => positionCursor(i)}
          onBlur={removeCursor}
        >
          <Button
            asChild
            variant="ghost"
            onClick={removeCursor}
            className={cn(
              "rounded-lg text-foreground hover:bg-transparent hover:text-foreground focus:text-foreground focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
              position && position.index === i
                ? "text-background hover:text-background focus:text-background"
                : "",
            )}
          >
            <Link href={href}>{label}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
