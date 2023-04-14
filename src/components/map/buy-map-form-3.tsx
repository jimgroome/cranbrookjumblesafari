import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useForm } from "../../context/use-form";

const BuyMapForm3 = () => {
  const { setBuyMapOpen } = useForm();
  return (
    <>
      <DialogContent>
        <DialogContentText>
          Thank you for ordering a map. We&rsquo;ll send you an email nearer the
          time with more information!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => setBuyMapOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </>
  );
};

export { BuyMapForm3 };
