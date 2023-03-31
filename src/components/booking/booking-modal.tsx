import { Button, Dialog, DialogTitle } from "@mui/material";
import { BookingForm1 } from "./booking-form-1";
import { BookingForm2 } from "./booking-form-2";
import { BookingForm3 } from "./booking-form-3";
import { useForm } from "../../context/use-form";

const BookingModal = () => {
  const {
    bookingPage,
    setBookingFormValues,
    initialBookingFormValues,
    bookingOpen,
    setBookingOpen,
  } = useForm();

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setBookingOpen(!bookingOpen)}
      >
        Book your Jumble Safari pitch
      </Button>
      <Dialog
        onClose={() => {
          setBookingOpen(false);
          setBookingFormValues(initialBookingFormValues);
        }}
        open={bookingOpen}
        fullWidth
      >
        <DialogTitle>Book a pitch</DialogTitle>
        {bookingPage === 1 ? (
          <BookingForm1 />
        ) : bookingPage === 2 ? (
          <BookingForm2 />
        ) : (
          <BookingForm3 />
        )}
      </Dialog>
    </>
  );
};

export { BookingModal };
