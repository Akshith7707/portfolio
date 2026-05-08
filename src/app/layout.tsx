import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsakshith.dev"),
  title: "Akshith Reddy Ponna | Software Engineer & AI Builder",
  description:
    "Software Engineer specializing in scalable systems, AI engineering, and full-stack development. Building intelligent applications with modern architectures. Open to FAANG internships and freelance opportunities.",
  keywords: [
    "Akshith Reddy Ponna",
    "Software Engineer",
    "AI Builder",
    "System Design",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Machine Learning",
    "FAANG",
    "Portfolio",
  ],
  authors: [{ name: "Akshith Reddy Ponna" }],
  creator: "Akshith Reddy Ponna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsakshith.dev",
    siteName: "Akshith Reddy Ponna",
    title: "Akshith Reddy Ponna | Software Engineer & AI Builder",
    description:
      "Software Engineer specializing in scalable systems, AI engineering, and full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshith Reddy Ponna - Software Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshith Reddy Ponna | Software Engineer & AI Builder",
    description:
      "Software Engineer specializing in scalable systems, AI engineering, and full-stack development.",
    creator: "@AkshithReddy07",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://itsakshith.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akshith Reddy Ponna",
              url: "https://itsakshith.dev",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "MVSR Engineering College",
              },
              sameAs: [
                "https://www.linkedin.com/in/akshith-reddy-2675ab202/",
                "https://x.com/AkshithReddy07",
                "https://leetcode.com/u/user3868OK/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
