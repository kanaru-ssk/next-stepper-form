import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { notoSansJp } from "@/libs/font";
import { theme } from "@/libs/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-lp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body className="relative m-0 min-h-screen">
            <Header />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
