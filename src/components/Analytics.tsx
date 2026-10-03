import Script from "next/script";

// IDs públicos recebidos de Chico em 30/09/2026; podem ser substituídos no build.
const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "553740172574489";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-K84G82RH";

export function AnalyticsFallback() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      <noscript>
        {/* Pixel sem JavaScript: imagem externa de 1px, sem otimização. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

export function Analytics() {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`}
      </Script>

      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {pixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {(gaId || pixelId || gtmId) && (
        <Script id="eventos-whatsapp" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){
            if(!(e.target instanceof Element))return;
            var a=e.target.closest('a[data-origem]');
            if(!a)return;
            var origem=a.getAttribute('data-origem')||'site';
            if(window.gtag){gtag('event','contato_whatsapp',{origem:origem});}
            else{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'contato_whatsapp',origem:origem});}
            if(window.fbq)fbq('track','Contact',{origem:origem});
          });`}
        </Script>
      )}
    </>
  );
}
