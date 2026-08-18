import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jldatainfo",
  description: "Sites e Landing Pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
