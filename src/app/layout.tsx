import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yashwanth | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Yashwanth",
  ],
  authors: [{ name: "Yashwanth" }],
  openGraph: {
    title: "Yashwanth | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Yashwanth Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashwanth | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#030014] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
