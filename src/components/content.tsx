import { Container, Grid, Typography } from "@mui/material";
import { BookingModal } from "./booking/booking-modal";
import { BuyMapModal } from "./map/buy-map-modal";
import { FaqsModal } from "./faqs/faqs-modal";
import { Footer } from "./footer";
import { useForm } from "@/context/use-form";

interface Props {
  pitchCount: number;
}

const Content = ({ pitchCount }: Props) => {
  const { setPitchCount } = useForm();

  setPitchCount(pitchCount);

  return (
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
              Woodpeckers Preschool is holding our first ever Cranbrook Jumble
              Safari on Sunday 4th June 2023.
            </Typography>
            <Typography variant="body1" mb={2}>
              Families all over Cranbrook will be selling second hand bargains
              from their garage or driveway.
            </Typography>
            <Typography variant="body1" mb={2}>
              For just £1, you can get your hands on a map with the locations of
              everyone taking part!
            </Typography>
            <Typography variant="body1" mb={2}>
              Pre-order your map online now and we&rsquo;ll email it to you on
              the morning of the event. Or you can collect a map on the day from
              Woodpeckers Preschool, Quaker Lane, TN17 2HF.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={4}>
            <BuyMapModal />
          </Grid>
          <Grid item xs={12} mb={4}>
            <Typography variant="body1" mb={2}>
              Woodpeckers&rsquo; car park will be filled with stall holders
              selling toys, books, puzzles and more. Plus we&rsquo;ll be selling
              bacon rolls, cake, hot drinks and squash &mdash; so make sure you
              pay us a visit!
            </Typography>
            <Typography variant="body1" mb={2} fontWeight={800}>
              Interested in taking part as a seller? It&rsquo;s not too late.
            </Typography>
            <Typography variant="body1" mb={2}>
              We&rsquo;re accepting entries until 8pm on Saturday 3rd June. It
              costs £10 to participate.
            </Typography>
            <Typography variant="body1" mb={2}>
              All the proceeds from pitch and map sales go to Woodpeckers
              Preschool, but sellers get to keep any money you make on the day.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={4}>
            <BookingModal />
          </Grid>
          <Grid item xs={12} mb={2}>
            <FaqsModal />
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export { Content };
