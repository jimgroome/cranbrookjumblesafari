import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/antonio";
import "@fontsource-variable/jost";
import { FormProvider } from "../context/use-form";
import { theme } from "../theme";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Content } from "@/components/content";

export default function Home() {
  const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
    intent: "capture",
    locale: "en_GB",
  };

  return (
    <ThemeProvider theme={theme}>
      <PayPalScriptProvider options={paypalOptions}>
        <FormProvider>
          <Head>
            <title>Cranbrook Jumble Safari</title>
            <meta
              name="description"
              content="Woodpeckers Preschool is a Cranbrook Jumble Safari on Sunday 2nd June 2024!"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="google-site-verification"
              content="ux4n6f2HGlCnivOjTkAOHaptgcX7aOo6RLPH8jpFM8Y"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Content />
        </FormProvider>
      </PayPalScriptProvider>
    </ThemeProvider>
  );
}
