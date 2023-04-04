import "styles/globals.css";
import "styles/components.css";
import { Montserrat } from "next/font/google";
import "nprogress/nprogress.css";

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
      <body>{children}</body>
    </html>
  );
}
