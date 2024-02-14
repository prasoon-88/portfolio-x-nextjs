import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({subsets:['latin-ext'],weight:['100','200','300','400','500','600','700']});

export const metadata: Metadata = {
  title: "Prasoon Asati",
  description: "mantained and developed by Prasoon asati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}
