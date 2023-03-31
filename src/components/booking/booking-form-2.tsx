import { DialogContent } from "@mui/material";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { pitchPrice } from "../../consts";
import { useForm } from "../../context/use-form";

const BookingForm2 = () => {
  const { handleBookingNavigation, handleSaveRecord } = useForm();

  const [{ options }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "GBP",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DialogContent>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "GBP",
                    value: pitchPrice.toString(),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={async (data, actions) => {
          if (actions && actions.order) {
            return actions.order.capture().then(async () => {
              await handleSaveRecord("pitch");
              handleBookingNavigation(3);
            });
          }
          return Promise.resolve();
        }}
      />
    </DialogContent>
  );
};

export { BookingForm2 };
