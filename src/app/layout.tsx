import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "../components/common/SiteHeader";
import ThemeProviders from "../components/common/ThemeProviders";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/common/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-[4.5rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "relative",
          "min-h-dvh",
          "flex flex-col",
          "bg-background",
          inter.variable
        )}
      >
        <ThemeProviders>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProviders>
      </body>
    </html>
  );
}
