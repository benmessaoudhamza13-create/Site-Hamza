import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Sketches from "@/components/Sketches";
import RevealObserver from "@/components/RevealObserver";
import PageTransition from "@/components/PageTransition";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hamza Ben Messaoud — Économie appliquée et finance",
  description:
    "Portfolio de Hamza Ben Messaoud, candidat à la maîtrise en finance de marché à HEC Montréal — projets, évaluations et revue macro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-text">
        <LangProvider>
          <Sketches />
          <RevealObserver />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Nav />
            <main className="flex flex-1 flex-col">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
