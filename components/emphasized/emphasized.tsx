import { cn } from "cn";
import { JSX } from "react";

export default function Emphasized(props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}): JSX.Element {
  const fromTo = "from-(--logo-text) to-(--logo-text-shimmer)";

  return (
    <strong
      className={cn(
        `bg-clip-text bg-linear-to-r ${fromTo} text-transparent`,
        props.className
      )}
    >
      {props.children}
    </strong>
  );
}