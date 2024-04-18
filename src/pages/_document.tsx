import { CssBaseline, useTheme } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CssBaseline />
      <body style={{ backgroundColor: "#fd5759" }}>
        <Main />
        <NextScript />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TGJBWFL89N`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TGJBWFL89N');
        `}
        </Script>
      </body>
    </Html>
  );
}
