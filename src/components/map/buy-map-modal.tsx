import { Button, Dialog, DialogTitle } from "@mui/material";
import { BuyMapForm1 } from "./buy-map-form-1";
import { BuyMapForm2 } from "./buy-map-form-2";
import { useForm } from "../../context/use-form";
import { BuyMapForm3 } from "./buy-map-form-3";

const BuyMapModal = () => {
  const {
    buyMapPage,
    setBuyMapFormValues,
    initialBuyMapFormValues,
    buyMapOpen,
    setBuyMapOpen,
  } = useForm();

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setBuyMapOpen(!buyMapOpen)}
      >
        Order your Jumble Safari map for just £1
      </Button>
      <Dialog
        onClose={() => {
          setBuyMapOpen(false);
          setBuyMapFormValues(initialBuyMapFormValues);
        }}
        open={buyMapOpen}
        fullWidth
      >
        <DialogTitle>Buy a map</DialogTitle>
        {buyMapPage === 1 ? (
          <BuyMapForm1 />
        ) : buyMapPage === 2 ? (
          <BuyMapForm2 />
        ) : (
          <BuyMapForm3 />
        )}
      </Dialog>
    </>
  );
};

export { BuyMapModal };
