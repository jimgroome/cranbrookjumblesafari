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
              It&rsquo;s just like a car boot sale, except your pitch is your
              driveway &mdash; so you don&rsquo;t have to try and fit everything
              into your car!
            </Typography>
            <Typography variant="body1" mb={2}>
              Your house is marked on a map, which local bargain hunters can buy
              for just £1. Best of all, you keep any money you make on the day!
            </Typography>
          </Grid>
          <Grid item xs={12} mb={4}>
            <BookingModal />
          </Grid>
          <Grid item xs={12} mb={4}>
            <Typography variant="body1" mb={2}>
              Places cost £10. All profits from pitch sales go to Woodpeckers
              Preschool. We&rsquo;ll also have six pitches in the Woodpeckers
              car park.
            </Typography>
            <Typography variant="body1" mb={2}>
              Snap up some bargains by taking part in Cranbrook&rsquo;s first
              jumble safari!
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
  );
};

export { Content };
