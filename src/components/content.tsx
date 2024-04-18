import { Box, Container, Grid, Typography } from "@mui/material";
import { BookingModal } from "./booking/booking-modal";
import { BuyMapModal } from "./map/buy-map-modal";
import { FaqsModal } from "./faqs/faqs-modal";
import { Footer } from "./footer";
import BigBox from "./big-box";

const Content = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }} className="home">
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} mb={2}>
            <BigBox borderWidth={16}>
              <Typography variant="h1" align="center">
                Cranbrook <br />
                Jumble Safari
              </Typography>
            </BigBox>
          </Grid>
          <Grid item xs={12} mb={2}>
            <BigBox>
              <Typography
                variant="h4"
                component="p"
                align="center"
                textTransform="uppercase"
                color="primary"
              >
                Cranbrook&rsquo;s official yard sale raising funds for
                Woodpeckers Preschool CIO
              </Typography>
            </BigBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <BigBox>
              <Typography
                variant="h2"
                component="p"
                align="center"
                textTransform="uppercase"
              >
                Sunday 2 June
                <br />
                10am - 2pm
              </Typography>
              <Typography
                variant="h3"
                component="p"
                align="center"
                textTransform="uppercase"
              >
                Sellers £10
                <br />
                Maps £1
              </Typography>
            </BigBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <BookingModal />
            {/* <BuyMapModal /> */}
          </Grid>
        </Grid>
      </Container>

      {/* <Grid item xs={12} mb={4}>
            <BuyMapModal />
          </Grid> */}
      {/* <Grid item xs={12} mb={4}> */}
      {/* <Typography variant="body1" mb={2}>
              Woodpeckers&rsquo; car park will be filled with stall holders
              selling toys, books, puzzles and more. Plus we&rsquo;ll be selling
              bacon rolls, cake, hot drinks and squash &mdash; so make sure you
              pay us a visit!
            </Typography> */}
      {/* <Typography variant="body1" mb={2} fontWeight={800}>
              Interested in taking part as a seller? It&rsquo;s not too late.
            </Typography>
            <Typography variant="body1" mb={2}>
              We&rsquo;re accepting entries until 8pm on Saturday 3rd June. It
              costs £10 to participate.
            </Typography> */}
      {/* <Typography variant="body1" mb={2}>
              All the proceeds from map sales go to Woodpeckers Preschool.
            </Typography> */}
      {/* </Grid> */}
      {/* <Grid item xs={12} mb={4}>
            <BookingModal />
          </Grid> */}
      {/* <Grid item xs={12} mb={2}>
            <FaqsModal />
          </Grid> */}
      {/* </Container> */}
      <Footer />
    </div>
  );
};

export { Content };
