import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "StockSimple | Control de Inventario para Tiendas | Pago Único $12",
  description: "StockSimple: la herramienta visual de control de inventario para dueños de tiendas. Alertas de escasez, reportes de best sellers y más. Pago único de $12, sin suscripciones.",
  keywords: "inventario tienda, control stock, gestión inventario, StockSimple",
  openGraph: {
    title: "StockSimple | Control de Inventario para Tiendas",
    description: "Deja de perder dinero en cuadernos y Excels. Toma el control total de tu inventario.",
    type: "website",
    url: "https://stocksimpleweb.nexuscloud.click",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','1818598375619573');
          fbq('track','PageView');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
