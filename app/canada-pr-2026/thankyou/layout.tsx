import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
 
 title: 'Canada Permanent Residency Visa| Canada PR Visa Process Requirements Free Eligibility ',
    description: 'Apply for Canada Permanent Residence Visa and Check your Free Eligibility for Canada PR Visa Process and Requirements or Apply Immigration for Canada Express Entry and PNP Program for High Pay Skilled Workers in Canada also know the Benefits of Canada PR Visa Process Online and How to Apply for Canada PR Visa Online with Best Canada Permanent Residency - PR Visa Immigration Consultants in Hyderabad and Bangalore for fast Process ',
    keywords: 'Canada Permanent Residency Visa, Canada PR Visa, Canada PR Visa Process, How to Apply for Canada PR Visa Online, Apply Canada PR Visa Online, Check Canada PR Visa Eligibility, Free Canada PR Visa Eligibility, Migrate To Canada, Canada Permanent Resident Visa, Canada Express Entry Program, Canada Skilled Worker Visa, Apply for Canada Skilled Worker Visa Online, Express Entry PR Visa Process, Canada PNP Program Online, Documents for Canada PR Visa, Permanent Residence Visa for Canada, PR Visa, Permanent Residence Visa for Canada',

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
