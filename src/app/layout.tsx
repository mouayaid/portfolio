import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mouayaid Zammit Chatti | Software Engineer",
    template: "%s | Mouayaid Zammit Chatti",
  },
  description:
    "Software Engineer portfolio focused on full-stack, mobile and AI-powered applications.",
  applicationName: "Mouayaid Zammit Chatti Portfolio",
  authors: [{ name: "Mouayaid Zammit Chatti" }],
  creator: "Mouayaid Zammit Chatti",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Mouayaid Zammit Chatti | Software Engineer",
    description:
      "Portfolio focused on full-stack, mobile and AI-powered applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mouayaid Zammit Chatti | Software Engineer",
    description:
      "Portfolio focused on full-stack, mobile and AI-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
