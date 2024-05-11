import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wu's Portfolio: About",
    description: "This is about page of Wu's Portfolio.",
  };

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
