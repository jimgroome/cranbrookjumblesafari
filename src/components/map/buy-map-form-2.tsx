import { DialogContent } from "@mui/material";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useForm } from "../../context/use-form";
import { mapPrice } from "../../consts";
import { useEffect } from "react";

const BuyMapForm2 = () => {
  const { handleSaveRecord, handleBuyMapNavigation } = useForm();
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
                    value: mapPrice.toString(),
                  },
                  payee: {
                    email_address: process.env.NEXT_PUBLIC_PAYPAL_PAYEE_EMAIL,
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
              await handleSaveRecord("map");
              handleBuyMapNavigation(3);
            });
          }
          return Promise.resolve();
        }}
      />
    </DialogContent>
  );
};

export { BuyMapForm2 };
