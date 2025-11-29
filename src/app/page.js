export const metadata = {
  title: "Golden Spice Venture | Premium Turmeric Exporter from India",
  description:
    "Golden Spice Venture exports high-quality turmeric directly from Indian farms. Organic, double-polished, bulk supply, private labeling & worldwide shipping.",
  keywords: [
    "turmeric exporter India",
    "bulk turmeric supplier",
    "double polished turmeric",
    "Indian spices export",
    "turmeric finger exporter",
    "turmeric powder wholesale",
    "private label turmeric",
    "organic turmeric export"
  ],
  openGraph: {
    title: "Golden Spice Venture | Premium Turmeric Exporter",
    description:
      "Exporting high-quality turmeric globally with sustainable farming and authentic sourcing.",
    url: "https://goldenspiceventure.com/",
    siteName: "Golden Spice Venture",
    images: [
      {
        url: "/img/homeBG.png",
        width: 1200,
        height: 630,
        alt: "Golden Spice Venture - Turmeric Export"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Spice Venture",
    description:
      "High-quality turmeric exporter from India with global shipping.",
    images: ["/img/homeBG.png"]
  },
  alternates: {
    canonical: "https://goldenspiceventure.com/"
  }
};

import HomeClient from "./HomeClient";

export default function Home() {

  return (
   <HomeClient />
  );
}
