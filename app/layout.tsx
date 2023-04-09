import ProgressBar from "@/components/layouts/proggress-bar";
import { Montserrat } from "next/font/google";
import "styles/components.css";
import "styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shun Cosmetic",
  description: "Shun Cosmetic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ProgressBar>{children}</ProgressBar>
      </body>
    </html>
  );
}
