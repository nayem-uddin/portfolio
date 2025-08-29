import { cloneElement, ReactElement } from "react";

export default function ElevationScroll({
  children,
}: {
  children: ReactElement<{ elevation?: number }>;
}) {
  return children
    ? cloneElement(children, {
        elevation: 0,
      })
    : null;
}
