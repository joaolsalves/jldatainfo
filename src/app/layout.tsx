import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jldatainfo",
  description: "Sites e Landing Pages",
  icons: {
    icon: "/assets/img/logo-jl-icon.svg",
  },
  openGraph: {
    title: "jldatainfo | Sites e Landing Pages",
    description: "Criação de sites, landing pages modernas, hospedagem e domínio para destacar seu negócio na internet.",
    url: "https://jldatainfo.com",
    siteName: "jldatainfo",
    images: [
      {
        url: "https://jldatainfo.com/assets/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "jldatainfo - Sites e Landing Pages profissionais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jldatainfo | Sites e Landing Pages",
    description: "Criação de sites, landing pages modernas, hospedagem e domínio para destacar seu negócio na internet.",
    images: ["https://jldatainfo.com/assets/img/og-image.png"],
  },
  metadataBase: new URL("https://jldatainfo.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "jldatainfo",
    url: "https://jldatainfo.com",
    logo: "https://jldatainfo.com/assets/img/logo-jldatainfo.svg",
    image: "https://jldatainfo.com/assets/img/og-image.png",
    description: "Criação de sites, landing pages, hospedagem e domínio.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-21-98077-2874",
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: ["https://wa.me/5521980772874"],
  };

  return (
    <html>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
