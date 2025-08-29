import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-2 outline-2 outline-offset-4 justify-self-center py-2 px-10 text-xl font-serif md:text-2xl lg:text-3xl mt-2 md:mt-5">
      {children}
    </h2>
  );
}
