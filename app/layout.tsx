import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honeycomb Perde – Kışın Sıcak, Yazın Serin | Sipariş Ver",
  description:
    "Honeycomb Perde kışın ısı kaybını önler, yazın güneş sıcağını engeller. Faturayı %30 düşürür. Türkiye montajlı, Avrupa'ya 4-10 günde kapıya teslim.",
  keywords: [
    "honeycomb perde",
    "hücreli perde",
    "plise perde",
    "enerji tasarruflu perde",
    "ısı yalıtımlı perde",
    "jaluzi perde",
    "zip perde",
    "düet perde",
    "sineklik",
    "Avrupa honeycomb perde",
    "Almanya perde gönderim",
  ],
  authors: [{ name: "Fenetre Systems", url: "https://www.fenetresystems.com" }],
  creator: "Fenetre Systems",
  publisher: "Fenetre Systems",
  metadataBase: new URL("https://honeycombperde.com.tr"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://honeycombperde.com.tr",
    siteName: "Honeycomb Perde",
    title: "Honeycomb Perde – Kışın Sıcak, Yazın Serin | Sipariş Ver",
    description:
      "Honeycomb Perde kışın ısı kaybını önler, yazın güneş sıcağını engeller. Faturayı %30 düşürür. Türkiye montajlı, Avrupa'ya 4-10 günde kapıya teslim.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Honeycomb Perde – Isı Yalıtımı & Enerji Tasarrufu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FenetreSystems",
    creator: "@FenetreSystems",
    title: "Honeycomb Perde – Kışın Sıcak, Yazın Serin",
    description: "Honeycomb Perde kışın ısı kaybını önler, yazın güneş sıcağını engeller. Fatura tasarrufu %30. Avrupa'ya kapıya teslim.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "honeycombperde-google-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#83bd81" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fenetre Systems",
              url: "https://honeycombperde.com.tr",
              logo: "https://honeycombperde.com.tr/logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-540-336-3873",
                contactType: "customer service",
                availableLanguage: ["Turkish", "German", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              sameAs: [
                "https://www.facebook.com/FenetreSystems/",
                "https://www.instagram.com/fenetresystems/",
                "https://x.com/FenetreSystems",
                "https://www.linkedin.com/company/fenetresystems/",
                "https://tr.pinterest.com/fenetresystems/",
                "https://www.youtube.com/@FenetreSystems",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
