import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import { useForm } from "../../context/use-form";

const FaqsModal = () => {
  const { setBuyMapOpen, setBookingOpen, setFaqsOpen, faqsOpen } = useForm();

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setFaqsOpen(!faqsOpen)}
      >
        FAQs
      </Button>
      <Dialog
        onClose={() => {
          setFaqsOpen(false);
        }}
        open={faqsOpen}
        fullWidth
      >
        <DialogTitle>FAQs</DialogTitle>
        <DialogContent>
          <DialogContentText mb={2}>
            <strong>What is a jumble safari?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            A jumble safari is a cross between a jumble sale and a car boot
            fair.
          </DialogContentText>
          <DialogContentText mb={2}>
            Like a boot sale, you set up your own table, sell whatever you want
            (within reason!) and keep the money you make from selling your
            unwanted items. The main difference is that it’s not held in a
            field.
          </DialogContentText>
          <DialogContentText mb={2}>
            Instead, you set up your stall on your own driveaway and people come
            to visit you.
          </DialogContentText>
          <DialogContentText mb={2}>
            It’s much better than a car boot sale as there’s no need to load up
            your car before and after, you can put up a shelter or gazebo to
            stay comfortable, and drinks, snacks and a decent toilet are only a
            few steps away!
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>How will people find our driveway? </strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            When you book your pitch for Cranbrook Jumble Safari we’ll ask you
            to share your address. We’ll number your house on a map of Cranbrook
            that will be available to bargain hunters on the day of the event,
            so people will know where to find you.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>How much does it cost to take part?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            If you want to book a pitch, we’re offering an early bird price of
            £8 before Friday 26th May. You can still sign up until Friday 2nd
            June, however it will cost £10 to secure your spot.
          </DialogContentText>
          <DialogContentText mb={2}>
            Pitch bookings will close at midnight on Friday 2nd June to give us
            time to complete the jumble safari map.
          </DialogContentText>
          <DialogContentText mb={2}>
            Please{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                setBookingOpen(true);
                setFaqsOpen(false);
              }}
              component="a"
              href="#"
            >
              book your pitch online
            </Link>{" "}
            and pay via PayPal.
          </DialogContentText>
          <DialogContentText mb={2}>
            If you want to grab a bargain, maps will cost £1 per copy.
          </DialogContentText>
          <DialogContentText mb={2}>
            All money raised from the sale of pitches will be donated to
            Woodpeckers Preschool.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Can I still take part if I don’t have a driveway? </strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Yes! We have room for six stalls at Woodpeckers Preschool on Quaker
            Lane for people that want to take part but don’t have a driveway.
            Email{" "}
            <Link href="mailto:woodpeckerschair@gmail.com">
              woodpeckerschair@gmail.com
            </Link>{" "}
            to book your space. There is parking available on-site.
          </DialogContentText>
          <DialogContentText mb={2}>
            We kindly ask anyone setting up a stall to arrive from 9-9:30am and
            leave between 4-4:30pm to minimise traffic, as we anticipate young
            children visiting the site.
          </DialogContentText>
          <DialogContentText mb={2}>
            Please note: you will need to provide your own table.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Will Woodpeckers have a stall?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Yes! It’s worth planning a trip to Woodpeckers Preschool on your
            route as there will be plenty to keep you entertained. There will be
            up to seven stalls on-site including a Woodpeckers stall selling
            toys and other bric-a-brac.{" "}
          </DialogContentText>
          <DialogContentText mb={2}>
            We will also be selling bacon sandwiches and sweet treats, plus you
            can purchase copies of the Jumble Safari map from 9am by stopping
            off at Woodpeckers preschool.{" "}
          </DialogContentText>
          <DialogContentText mb={2}>
            Please note: you will not be able to drive your car onto the
            Woodpeckers site during the Jumble Safari event. We are hoping to
            gain permission to use the field next door for parking and will
            update this website when further details are available.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>
              Where can I get hold of a Cranbrook Jumble Safari map?{" "}
            </strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            You can{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                setBuyMapOpen(true);
                setFaqsOpen(false);
              }}
              component="a"
              href="#"
            >
              buy a map online
            </Link>{" "}
            now for £1. When you check out we will ask for your email address –
            this is so we can send you a PDF copy of the map on the morning of
            the Jumble Safari.
          </DialogContentText>
          <DialogContentText mb={2}>
            Printed maps will also be available on the day from Woodpeckers
            Preschool on Quaker Lane, and from selected shops in Cranbrook. More
            information on this will be provided nearer the time.
          </DialogContentText>
          <DialogContentText mb={2}>
            Please note: unfortunately we can’t send out copies of the map in
            advance as we don’t want it to be shared unofficially. Remember, all
            funds raised from the sale of maps will support Woodpeckers
            Preschool!
          </DialogContentText>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setFaqsOpen(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { FaqsModal };
