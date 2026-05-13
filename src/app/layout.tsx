import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rise at Seven — We Create Category Leaders",
  description:
    "The #1 most recommended content marketing agency. Driving demand and discovery on every searchable platform.",
  authors: [{ name: "Rise at Seven" }],
  openGraph: {
    title: "Rise at Seven — We Create Category Leaders",
    description:
      "The #1 most recommended content marketing agency. Driving demand and discovery on every searchable platform.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rise at Seven — We Create Category Leaders",
    description:
      "The #1 most recommended content marketing agency. Driving demand and discovery on every searchable platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}