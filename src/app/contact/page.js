export const metadata = {
  title: "Contact Us | Golden Spice Venture | Get in Touch",
  description:
    "Contact Golden Spice Venture for premium turmeric export, bulk supply, private labeling, and global shipping. Our team is ready to answer all your queries.",
  keywords: [
    "contact Golden Spice Venture",
    "turmeric exporter contact",
    "spice export company contact",
    "bulk turmeric inquiry",
    "turmeric private label contact",
    "Indian spice exporter",
    "turmeric supply contact",
  ],
  openGraph: {
    title: "Contact Golden Spice Venture",
    description:
      "Reach out for bulk turmeric exports, private labeling, pricing details, and worldwide delivery.",
    url: "https://goldenspiceventure.com/contact/",
    siteName: "Golden Spice Venture",
    images: [
      {
        url: "/img/logo.png", // add any image from your project
        width: 1200,
        height: 630,
        alt: "Contact Golden Spice Venture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Golden Spice Venture",
    description:
      "We are here to help with bulk turmeric export, logistics, and private labeling inquiries.",
    images: ["/img/logo.png"],
  },
  alternates: {
    canonical: "https://goldenspiceventure.com/contact/",
  },
};

import ContactClient from "./ContactClient ";

export default function Contact() {
  
  return (
    <ContactClient />
  );
}
