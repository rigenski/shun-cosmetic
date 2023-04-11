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
  description: "Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
  openGraph: {
    type: "website",
    url: "https://shun.co.id/",
    title: "Shun Cosmetic",
    description: "Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
    images: "https://shun.co.id/images/shun-logo.png",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://shun.co.id/",
    title: "Shun Cosmetic",
    description: "Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
    images: "https://shun.co.id/images/shun-logo.png",
  },
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
