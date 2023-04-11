"use client";
import Script from "next/script";

export const event = ({ name, options }: any): any => {
  // @ts-ignore
  window.fbq("track", name, options);
};

export default function MetaPixel({ children }: any) {
  return (
    <>
      <Script id="facebook-pixel">
        {`
       !function(f,b,e,v,n,t,s)
       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
       n.queue=[];t=b.createElement(e);t.async=!0;
       t.src=v;s=b.getElementsByTagName(e)[0];
       s.parentNode.insertBefore(t,s)}(window, document,'script',
       'https://connect.facebook.net/en_US/fbevents.js');
       fbq('init', '238830668633930');
       fbq('track', 'PageView');
      `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=238830668633930&ev=PageView&noscript=1"
        />
      </noscript>

      {children}
    </>
  );
}
