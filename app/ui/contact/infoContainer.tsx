import { ReactElement, ReactNode } from "react";

export default function InfoContainer({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactElement;
}) {
  return (
    <div className="flex gap-x-2 mt-2">
      {icon}
      {children}
    </div>
  );
}
