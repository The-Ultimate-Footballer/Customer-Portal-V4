import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Dashboard - The Ultimate Footballer",
  description: "AI Agent Command Center for Business Operations",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Bypass the main layout wrapper entirely for dashboard
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}