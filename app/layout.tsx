import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Wrapper from "./ui/themeProvider";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Nayem Uddin Biswas",
  metadataBase: new URL(process.env.DEPLOY_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense>
          <Wrapper>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </Wrapper>
        </Suspense>
      </body>
    </html>
  );
}
