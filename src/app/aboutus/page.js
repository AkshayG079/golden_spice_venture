export const metadata = {
  title: "About Us | Turmeric Export & Logistics Experts",
  description:
    "We export premium-quality turmeric worldwide with reliable sourcing, processing, logistics, and global partnerships. Learn about our journey and services.",
  keywords: [
    "turmeric export",
    "turmeric supplier India",
    "bulk turmeric export",
    "spice export company",
    "private labeling turmeric",
    "turmeric logistics",
    "organic turmeric exporter",
    "Indian spices export"
  ],
  openGraph: {
    title: "Turmeric Export & Logistics Experts",
    description:
      "Connecting the world with premium turmeric through global export services, quality assurance, and efficient logistics.",
    url: "https://goldenspiceventure.com/aboutus/",
    siteName: "Your Spice Export Company",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Turmeric Export Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turmeric Export & Logistics Experts",
    description:
      "Premium turmeric export with global delivery, quality checks, and private labeling solutions.",
    images: ["/img/logo.png"],
  },
  alternates: {
    canonical: "https://goldenspiceventure.com/aboutus/",
  },
};

import AboutusClient from "./AboutusClient";

export default function About() {
  return (
    <AboutusClient />
  );
}
