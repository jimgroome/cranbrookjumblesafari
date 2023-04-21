import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/alegreya";
import { Grid, Link, Typography } from "@mui/material";
import { BookingModal } from "../components/booking/booking-modal";
import { FormProvider } from "../context/use-form";
import { theme } from "../theme";
import { Footer } from "../components/footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BuyMapModal } from "../components/map/buy-map-modal";
import { Container } from "@mui/system";
import { FaqsModal } from "../components/faqs/faqs-modal";

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
            <meta name="description" content="Sunday 4th June, 10am - 4pm" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div style={{ minHeight: "100vh", position: "relative" }}>
            <div style={{ paddingBottom: "4rem" }}>
              <Container
                maxWidth="md"
                sx={{
                  backgroundColor: "white",
                  py: 4,
                  borderRadius: 4,
                }}
              >
                <Grid item xs={12} mb={2}>
                  <Typography variant="h2" component="h1" align="center">
                    Cranbrook Jumble Safari
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <Typography variant="body1" align="center">
                    Sunday 4th June, 10am - 4pm
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <Typography variant="body1" mb={2}>
                    Woodpeckers Preschool is holding our first ever Cranbrook
                    Jumble Safari on Sunday 4th June 2023.
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    It&rsquo;s just like a car boot sale, except your pitch is
                    your driveway – so you don&rsquo;t have to try and fit
                    everything into your car!
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    Your house is marked on a map, which local bargain hunters
                    can buy for just £1. Best of all, you keep any money you
                    make on the day!
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <BookingModal />
                </Grid>
                <Grid item xs={12} mb={4}>
                  <Typography variant="body1" mb={2}>
                    Places cost £8 if you book before Friday 26th May or £10 if
                    you book during the week leading up to the event. All
                    profits from pitch sales go to Woodpeckers Preschool.
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    Don&rsquo;t have a driveway? Don&rsquo;t worry. We have six
                    pitches up for grabs in the Woodpeckers car park. Email{" "}
                    <Link href="mailto:cranbrookjumblesafari@gmail.com">
                      cranbrookjumblesafari@gmail.com
                    </Link>{" "}
                    to book your space.
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    Snap up some bargains by taking part in Cranbrook&rsquo;s
                    first jumble safari!
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    Digital maps cost £1 and will be sent to you by email on the
                    morning of the event.
                  </Typography>
                </Grid>
                <Grid item xs={12} mb={4}>
                  <BuyMapModal />
                </Grid>
                <Grid item xs={12} mb={2}>
                  <FaqsModal />
                </Grid>
              </Container>
            </div>
            <Footer />
          </div>
        </FormProvider>
      </PayPalScriptProvider>
    </ThemeProvider>
  );
}
