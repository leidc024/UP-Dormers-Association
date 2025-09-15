import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UP Dormers Association",
  description: "A platform for UP Dormers to apply.",
  authors: [{ name: 'Performative Tech' }],
  creator: 'Performative Tech',
  publisher: 'Performative Tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{ variables: { colorPrimary: '#7B1113' } }}>
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
