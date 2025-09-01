import { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-x-3 flex-wrap justify-center mt-5 md:mt-2">
      {children}
    </div>
  );
}
