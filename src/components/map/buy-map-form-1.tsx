import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { useForm } from "../../context/use-form";

const BuyMapForm1 = () => {
  const { handleBuyMapNavigation, buyMapFormValues, setBuyMapFormValues } =
    useForm();

  return (
    <>
      <DialogContent>
        <TextField
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBuyMapFormValues({ ...buyMapFormValues, name: e.target.value })
          }
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="email"
          label="Email address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBuyMapFormValues({ ...buyMapFormValues, email: e.target.value })
          }
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="phone"
          label="Telephone number"
          type="tel"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBuyMapFormValues({ ...buyMapFormValues, phone: e.target.value })
          }
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => handleBuyMapNavigation(2)}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export { BuyMapForm1 };
