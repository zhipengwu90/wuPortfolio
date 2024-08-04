import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wu's Portfolio: Chatbot",
  description: "This is projects' page of Wu's Portfolio.",
  };

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
