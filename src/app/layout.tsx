import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://serenity-insurance.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Serenity Insurance Brokerage | Property & Casualty Insurance",
    template: "%s | Serenity Insurance Brokerage",
  },
  description:
    "Serenity Insurance Brokerage - Reliable Property & Casualty coverage tailored to your industry. Comprehensive insurance solutions for businesses of all sizes.",
  openGraph: {
    type: "website",
    siteName: "Serenity Insurance Brokerage",
    title: "Serenity Insurance Brokerage | Property & Casualty Insurance",
    description:
      "Reliable Property & Casualty coverage tailored to your industry. Comprehensive insurance solutions for businesses of all sizes.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
