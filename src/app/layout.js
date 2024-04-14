import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Noise from "@/components/Noise";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ weight: "600", subsets: ["latin"] });
const urbanistBold = Urbanist({ weight: "800", subsets: ["latin"] });

export const metadata = {
  title: "2024",
  description:
    "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} overflow-hidden h-screen`}>
        <SmoothScrolling>
          <Noise />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
