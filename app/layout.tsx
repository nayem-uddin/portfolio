import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Nayem Uddin Biswas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <Suspense fallback={<LinearProgress />}>{children}</Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
