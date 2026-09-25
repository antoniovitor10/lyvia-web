import Script from "next/script";

// Só entram no HTML quando os IDs existirem no build.
// Defina NEXT_PUBLIC_GA_ID e/ou NEXT_PUBLIC_META_PIXEL_ID nos secrets do repositório.
const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function Analytics() {
  return (
    <>
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

      {(gaId || pixelId) && (
        <Script id="eventos-whatsapp" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){
            var a=e.target.closest('a[href*="wa.me"]');
            if(!a)return;
            var origem=a.getAttribute('data-origem')||'site';
            if(window.gtag)gtag('event','contato_whatsapp',{origem:origem});
            if(window.fbq)fbq('track','Contact',{origem:origem});
          });`}
        </Script>
      )}
    </>
  );
}
