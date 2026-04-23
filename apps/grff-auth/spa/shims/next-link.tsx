import React from "react";

type HrefLike = string | { pathname?: string };

type LinkProps = React.PropsWithChildren<{
  href: HrefLike;
  className?: string;
}>;

export default function NextLink({ href, children, className }: LinkProps) {
  const to = typeof href === "string" ? href : href.pathname ?? "/";

  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
