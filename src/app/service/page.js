
export const metadata = {
  title:
    "Our Turmeric Export Services | Bulk Export, Private Labeling & Global Logistics",
  description:
    "Explore our premium turmeric export services including bulk supply, private labeling, customized packaging, and global shipping with certified quality assurance.",
  keywords: [
    "turmeric export services",
    "bulk turmeric exporter",
    "private labeling turmeric",
    "turmeric wholesale supplier",
    "turmeric export company",
    "Indian spices exporter",
    "turmeric logistics",
    "custom spice packaging",
    "FOB CIF turmeric export",
  ],
  openGraph: {
    title: "Our Turmeric Export Services",
    description:
      "We provide bulk turmeric export, private labeling, custom packaging, and global logistics solutions.",
    url: "https://goldenspiceventure.com/service/",
    siteName: "Your Spice Export Company",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Turmeric Export Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Turmeric Export Services",
    description:
    "Quality turmeric export, private labeling, bulk supply, and global delivery services.",
    images: ["/img/logo.png"],
  },
  alternates: {
    canonical: "https://goldenspiceventure.com/service/",
  },
};

import ServiceClient from "./ServiceClient";
export default function Service() {
  return <ServiceClient />;
}
