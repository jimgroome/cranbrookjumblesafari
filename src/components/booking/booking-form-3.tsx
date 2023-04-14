import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useForm } from "../../context/use-form";

const BookingForm3 = () => {
  const { setBookingOpen } = useForm();
  return (
    <>
      <DialogContent>
        <DialogContentText>
          Thank you for booking a pitch. We&rsquo;ll send you an email nearer
          the time with more information!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => setBookingOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </>
  );
};

export { BookingForm3 };
