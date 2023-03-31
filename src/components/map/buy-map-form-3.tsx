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
          Purchase complete. Please check your email!
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
