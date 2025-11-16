import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Golden Spice Venture",
  icons: {
    icon: "/favicon.ico",
  },cd
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
