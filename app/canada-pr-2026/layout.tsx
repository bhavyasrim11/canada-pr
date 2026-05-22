import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Canada PR from India | Apply Canada Permanent Residency Visa",
  description:
    "Get Canada PR from India with expert guidance from VJC Overseas. We help you check eligibility, prepare documents, submit Express Entry/PNP applications, improve CRS score, avoid scams, and fast-track your permanent residency process. Explore study, work & settlement opportunities in Canada with trusted immigration support. Free profile evaluation & step-by-step assistance.",
  keywords:
    "Canada PR from India,Canada PR Visa,Canada Immigration from India,Express Entry Canada PR,Canada PR Process 2026,Canada Permanent Residency,Canada PR Requirements,Canada PR Eligibility,Apply Canada PR online,Canada immigration consultant India,Canada work permit from India,Canada job & PR,Canada PR after work experience,Canada skilled worker PR,Canada Express Entry jobs,How to apply Canada PR from India,Canada PR documents list,Canada PR eligibility points calculator,Canada PR with job offer,Canada PR timeline from India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="L_PNy3dgEzp57F2JsXfvTXBc7aedqUdzow1IyvEmCUE"
        />

        {/* ✅ Google Tag Manager (Head) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TC77PLQP');
          `}
        </Script>

        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPH0CGYTXT');
          `}
        </Script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2003555746606868');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className="font-times antialiased bg-gray-50 text-gray-900">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TC77PLQP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
