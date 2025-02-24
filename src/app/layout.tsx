import type { Metadata } from "next";
import { ReactNode } from "react";
import {Poppins} from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
// import Header from "@/components/Header";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});
export const metadata: Metadata = {
  title: "Movie Catalog",
  description: "Explore e reserve filmes online!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <ThemeRegistry> 
          <Navbar/>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
