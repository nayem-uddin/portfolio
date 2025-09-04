"use client";

import { theme } from "@/lib/theme";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <NextAppProvider theme={theme}>{children}</NextAppProvider>;
}
