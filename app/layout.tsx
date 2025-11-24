import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Raj - CS Student & iOS Developer Portfolio",
  description: "B.Tech student at SRM Institute specializing in iOS development (Swift), web development, and UI/UX design. Explore my projects in AR, environmental tech, and system programming.",
  keywords: ["Abhinav Raj", "iOS developer", "Swift", "ARKit", "web development", "SRM Institute", "computer science", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, spaceGrotesk.variable)}>
      <body className="antialiased">
        <ThemeProvider>
          {/* Background layer – applies to ALL pages */}
          <div
            className={cn(
              'fixed inset-0 -z-10',
              // light theme first, overridden by .dark
              'bg-lines-light bg-lines-animated',
              'dark:bg-lines-dark dark:bg-lines-animated'
            )}
            aria-hidden="true"
          />
          
          {/* App shell */}
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
