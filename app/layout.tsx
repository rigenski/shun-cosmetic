import GoogleAnalytic from "@/components/layouts/google-analythic";
import MetaPixel from "@/components/layouts/meta-pixel";
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
  description: "Shun Cosmetic Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
  openGraph: {
    type: "website",
    url: "https://shun.co.id/",
    title: "Shun Cosmetic",
    description: "Shun Cosmetic Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
    images: "https://shun.co.id/images/shun.png",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://shun.co.id/",
    title: "Shun Cosmetic",
    description: "Shun Cosmetic Pabrik Maklon Buat Merk Kosmetik kamu sendiri",
    images: "https://shun.co.id/images/shun.png",
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
        <MetaPixel>
          <GoogleAnalytic>
            <ProgressBar>{children}</ProgressBar>
          </GoogleAnalytic>
        </MetaPixel>
      </body>
    </html>
  );
}
