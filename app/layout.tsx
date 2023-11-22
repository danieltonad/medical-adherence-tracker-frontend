import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Alegreya_Sans_SC } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });
const alegreya = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--alegreya",
});

export const metadata: Metadata = {
  title: "Vidder5 | Fast Delivery",
  description: "Number 1 dispatch ridiing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alegreya.variable} ${inter.className} relative`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
