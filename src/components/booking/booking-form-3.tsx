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
          Booking complete. Please check your email!
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
