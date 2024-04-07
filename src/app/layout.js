import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Noise from "@/components/Noise";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2024",
  description:
    "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
          <Noise />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
