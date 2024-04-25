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
  const { setFaqsOpen, faqsOpen } = useForm();

  return (
    <>
      <Button fullWidth variant="cta" onClick={() => setFaqsOpen(!faqsOpen)}>
        Find out more
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
            A jumble safari is a bit like a car boot sale. But instead of
            driving to a field you use your own driveway!You don’t have to worry
            about packing everything away and you’ve got the kettle and a nice
            toilet close to hand.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Can I keep any money I make on the day?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Yes! You pay £10 to Woodpeckers Preschool to take part and then any
            money you make on the day goes straight into your pocket. It’s a
            great way to turn your clutter into cash.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>How do people find my house?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            The address of every person that signs is added to our official
            Cranbrook Safari map. People can pick up a map on the day from
            Woodpeckers Preschool and follow the route around the town. We will
            also provide signage to show you’re an official seller - and we
            encourage you to decorate your driveway to make your house stand
            out!
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>
              I live out of town/I don’t have a driveway but I want to sell. Can
              I still take part?
            </strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            We have a limited number of spaces to sell in the Woodpeckers
            Preschool car park, available on a first-come, first-served basis.
            Email{" "}
            <Link href="mailto:cranbrookjumblesafari@gmail.com">
              cranbrookjumblesafari@gmail.com
            </Link>{" "}
            to check if we have any spaces left.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Are there any restrictions on what I can sell?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Other than the usual legal requirements for what you can/can’t sell,
            the only thing we ask is that participants do not sell food or
            drink.
          </DialogContentText>
          <DialogContentText mb={2}>
            Refreshments will be available from Woodpeckers and any food/drink
            being sold for personal gain could take funds away from the
            preschool.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>
              I want to do some bargain hunting. How do I buy a map?
            </strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Maps cost £1 and can be purchased from Woodpeckers Preschool, Quaker
            Lane, Cranbrook, TN17 2HF from 10am on the day of the event.
          </DialogContentText>

          <DialogContentText mb={2}>
            We take both cash and card payments.
          </DialogContentText>

          <DialogContentText mb={2}>
            <strong>Where do I park on the day?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            There will free parking in the field next door to Woodpeckers.
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Will you be selling refreshments?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Yes! There will also be bacon rolls, tea & coffee, cold drinks and
            cakes on sale to fuel you up before you set off!
          </DialogContentText>
          <DialogContentText mb={2}>
            <strong>Got any more questions?</strong>
          </DialogContentText>
          <DialogContentText mb={2}>
            Email{" "}
            <Link href="mailto:cranbrookjumblesafari@gmail.com">
              cranbrookjumblesafari@gmail.com
            </Link>{" "}
            and we’ll be happy to answer them.
          </DialogContentText>

          <Button variant="cta" onClick={() => setFaqsOpen(false)} fullWidth>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { FaqsModal };
