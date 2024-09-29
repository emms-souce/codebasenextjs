import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Code base",
  description: "My new code base with next.js tailwindcss and typescript, react-query, react-hook-form, and shadcn ui" ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        {children}
      </body>
    </html>
  );
}
