import { useState } from "react";
import constate from "constate";
import axios from "axios";

export interface BookingFormValues {
  name?: string;
  address1?: string;
  address2?: string;
  town?: string;
  postcode?: string;
  email?: string;
  phone?: string;
  lat?: number;
  long?: number;
  agreeSign: boolean;
}

export interface AddressSuggestion {
  address: string;
  id: string;
  url: string;
}

const useFormHook = () => {
  const initialBookingFormValues: BookingFormValues = {
    name: "",
    address1: "",
    address2: "",
    town: "",
    postcode: "",
    email: "",
    phone: "",
    lat: 0,
    long: 0,
    agreeSign: true,
  };
  const [bookingOpen, setBookingOpen] = useState(false);
  const [buyMapOpen, setBuyMapOpen] = useState(false);
  const [faqsOpen, setFaqsOpen] = useState(false);
  const [bookingPage, setBookingPage] = useState(1);
  const [bookingFormValues, setBookingFormValues] = useState<BookingFormValues>(
    initialBookingFormValues
  );
  const initialBuyMapFormValues = {
    name: "",
    email: "",
    phone: "",
  };
  const [buyMapPage, setBuyMapPage] = useState(1);
  const [buyMapFormValues, setBuyMapFormValues] = useState(
    initialBuyMapFormValues
  );
  const [loading, setLoading] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<
    AddressSuggestion[] | null
  >(null);

  const [pitchCount, setPitchCount] = useState(0);

  const handlePostcodeLookup = async () => {
    try {
      setLoading(true);
      if (bookingFormValues.postcode) {
        const response = await axios(
          `/api/postcode-lookup/?postcode=${bookingFormValues.postcode.toUpperCase()}`
        );
        const json = await response.data;
        setLoading(false);
        setAddressSuggestions(json.success.suggestions);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddressLookup = async (id: string) => {
    setLoading(true);
    const response = await axios(`/api/address-lookup/?id=${id}`);
    const json = await response.data.fullAddress;
    setLoading(false);
    setBookingFormValues({
      ...bookingFormValues,
      address1: json.address.line_1,
      address2: json.address.line_2,
      town: json.address.town_or_city,
      postcode: json.address.postcode,
      lat: json.address.latitude,
      long: json.address.longitude,
    });
  };

  const handleSaveRecord = async (recordType: "pitch" | "map") => {
    try {
      setLoading(true);
      await axios.post(`/api/save-record`, {
        ...(recordType === "pitch" ? bookingFormValues : buyMapFormValues),
        recordType,
      });
      setLoading(false);

      console.log(
        JSON.stringify(
          {
            ...(recordType === "pitch" ? bookingFormValues : buyMapFormValues),
            recordType,
          },
          null,
          4
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookingNavigation = (newPage: number) => {
    const { name, address1, town, postcode, email, phone } = bookingFormValues;
    if (
      name !== "" &&
      address1 !== "" &&
      town !== "" &&
      postcode !== "" &&
      email !== "" &&
      phone !== ""
    ) {
      setBookingPage(newPage);
    } else {
      alert("Please make sure you have completed every field.");
    }
  };
  const handleBuyMapNavigation = (newPage: number) => {
    const { name, email, phone } = buyMapFormValues;
    if (name !== "" && email !== "" && phone !== "") {
      setBuyMapPage(newPage);
    } else {
      alert("Please make sure you have completed every field.");
    }
  };
  return {
    bookingPage,
    setBookingPage,
    bookingFormValues,
    setBookingFormValues,
    initialBookingFormValues,
    handleBookingNavigation,
    loading,
    addressSuggestions,
    handlePostcodeLookup,
    handleAddressLookup,
    setAddressSuggestions,
    buyMapPage,
    setBuyMapPage,
    buyMapFormValues,
    initialBuyMapFormValues,
    handleBuyMapNavigation,
    setBuyMapFormValues,
    handleSaveRecord,
    bookingOpen,
    setBookingOpen,
    buyMapOpen,
    setBuyMapOpen,
    setLoading,
    faqsOpen,
    setFaqsOpen,
    pitchCount,
    setPitchCount,
  };
};

const [FormProvider, useForm] = constate(useFormHook);

export { FormProvider, useForm };
