import Client from "getaddress-api";
import { NextApiRequest, NextApiResponse } from "next";

const addressLookup = async (req: NextApiRequest, res: NextApiResponse) => {
  const api = new Client(process.env.GETADDRESS_API_KEY as string);
  const id = req.query.id;
  const fullAddress = await api.get(id as string);
  // console.log(JSON.stringify(fullAddress, null, 4));
  res.status(200).json({ fullAddress });
};

export default addressLookup;
