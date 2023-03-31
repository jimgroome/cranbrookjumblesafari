import Client from "getaddress-api";
import { NextApiRequest, NextApiResponse } from "next";

const postcodeLookup = async (req: NextApiRequest, res: NextApiResponse) => {
  const api = new Client(process.env.GETADDRESS_API_KEY as string);

  const { postcode } = req.query as { postcode: string };

  const isValidPostcode = postcode.toUpperCase().startsWith("TN1");

  if (isValidPostcode) {
    const autocompleteResult = await api.autocomplete(
      req.query.postcode as string
    );

    if (autocompleteResult.isSuccess) {
      var success = autocompleteResult.toSuccess();
      res.status(200).json({ success });
    } else {
      const failed = autocompleteResult.toFailed();
      console.log(failed);
      res.status(502).json({ failed });
    }
  } else {
    res.status(400).json({ isValidPostcode });
  }
};

export default postcodeLookup;
