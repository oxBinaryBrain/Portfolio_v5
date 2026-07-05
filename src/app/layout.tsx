import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UDAY — Developer Portfolio",
  description:
    "Full-stack developer building apps, AI automation, and production-ready software that ships and scales.",
  icons: {
    icon: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Script id="scroll-to-hero-on-load" strategy="beforeInteractive">
          {`history.scrollRestoration="manual";(function(){var p=location.pathname;if(p==="/"||p===""){if(location.hash)history.replaceState(null,"","/");scrollTo(0,0);}})();`}
        </Script>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}