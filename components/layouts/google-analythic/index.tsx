"use client";
import Script from "next/script";

export const event = ({ name, options }: any) => {
  // @ts-ignore
  window.gtag("event", name, options);
};

export default function GoogleAnalytic({ children }: any) {
  return (
    <>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7VVSK22DCE`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-7VVSK22DCE');
        `}
      </Script>

      {children}
    </>
  );
}
