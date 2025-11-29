import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {

   metadataBase: new URL("https://goldenspiceventure.com"),
  title: "Golden Spice Venture",
  description: "Premium turmeric exporter from India with global shipping.",
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/android-chrome-512x512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/icons/favicon.ico"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Golden Spice Venture",
    description: "Premium turmeric exporter from India with global shipping.",
    url: "/",
    siteName: "Golden Spice Venture",
    images: [
      {
        url: "/img/homeBG.png", // must be inside public folder
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Spice Venture",
    description: "Premium turmeric exporter from India with global shipping.",
    images: ["/img/homeBG.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
