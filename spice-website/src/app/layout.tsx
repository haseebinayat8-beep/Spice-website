import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";

const siteUrl = "https://spice-food-delivery.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spice — Your Favorite Food Delivered Fast",
    template: "%s | Spice",
  },
  description:
    "Fresh burgers, wraps, and more, made in our own kitchens and delivered fast. Live tracking, secure payments, and 24/7 support with the Spice app.",
  keywords: [
    "food delivery",
    "food delivery app",
    "order food online",
    "fast food delivery",
    "Spice app",
  ],
  authors: [{ name: "Spice" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Spice — Your Favorite Food Delivered Fast",
    description:
      "Fresh food made in our own kitchens, delivered fast. Live tracking, secure payments, and 24/7 support.",
    siteName: "Spice",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Spice food delivery app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spice — Your Favorite Food Delivered Fast",
    description:
      "Fresh food made in our own kitchens, delivered fast.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('spice-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark-mode');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
