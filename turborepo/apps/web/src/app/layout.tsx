import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turborepo Web",
  description: "Web app in Turborepo monorepo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
