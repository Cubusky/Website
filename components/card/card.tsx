"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

export default function Card({
  href,
  className,
  children,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest(
        "a, button, input, select, textarea, label, summary, " +
          '[role="button"], [role="link"], [contenteditable]'
      )
    ) {
      return;
    }

    router.push(href);
  }

  return (
    <div
      onClick={handleClick}
      className={`pop bg-fd-card w-full rounded-lg shadow-md overflow-hidden p-6 mb-6 cursor-pointer ${className ?? ""}`}
    >
      {children}
    </div>
  );
}