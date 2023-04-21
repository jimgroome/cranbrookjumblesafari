import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useForm } from "../../context/use-form";
import SearchIcon from "@mui/icons-material/Search";

const BookingForm1 = () => {
  const {
    handleBookingNavigation,
    bookingFormValues,
    setBookingFormValues,
    handleAddressLookup,
    handlePostcodeLookup,
    addressSuggestions,
    setAddressSuggestions,
    loading,
  } = useForm();

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <DialogContent>
        <TextField
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBookingFormValues({ ...bookingFormValues, name: e.target.value })
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
            setBookingFormValues({
              ...bookingFormValues,
              email: e.target.value,
            })
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
            setBookingFormValues({
              ...bookingFormValues,
              phone: e.target.value,
            })
          }
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="postcode"
          label="Postcode"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBookingFormValues({
              ...bookingFormValues,
              postcode: e.target.value,
            })
          }
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="find address"
                  onClick={() => handlePostcodeLookup()}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {addressSuggestions && (
          <div>
            {addressSuggestions.map((address) => (
              <Button
                key={`${address.id}`}
                variant="text"
                fullWidth
                sx={{ justifyContent: "flex-start" }}
                onClick={async () => {
                  await handleAddressLookup(address.id);
                  setAddressSuggestions(null);
                }}
              >
                {address.address}
              </Button>
            ))}
          </div>
        )}
        <TextField
          id="address1"
          label="Address line 1"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBookingFormValues({
              ...bookingFormValues,
              address1: e.target.value,
            })
          }
          sx={{ marginBottom: 2 }}
          value={bookingFormValues.address1}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="address2"
          label="Address line 2"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBookingFormValues({
              ...bookingFormValues,
              address2: e.target.value,
            })
          }
          sx={{ marginBottom: 2 }}
          value={bookingFormValues.address2}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="town"
          label="Town"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) =>
            setBookingFormValues({ ...bookingFormValues, town: e.target.value })
          }
          sx={{ marginBottom: 2 }}
          value={bookingFormValues.town}
          InputLabelProps={{ shrink: true }}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={bookingFormValues.agreeSign}
              onChange={(e) =>
                setBookingFormValues({
                  ...bookingFormValues,
                  agreeSign: e.target.checked,
                })
              }
            />
          }
          label="I am happy to have an advertising board for this event put up in front of my house"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => handleBookingNavigation(2)}>
          Next
        </Button>
      </DialogActions>
    </>
  );
};

export { BookingForm1 };
