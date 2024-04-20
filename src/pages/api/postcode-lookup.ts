import Client from "getaddress-api";
import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { v4 as uuid } from "uuid";

AWS.config.update({
  region: "eu-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const postcodeLookup = async (req: NextApiRequest, res: NextApiResponse) => {
  const DynamoDB = new AWS.DynamoDB.DocumentClient();
  const record = { id: uuid() };

  await DynamoDB.put(
    {
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
      Item: record,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
    }
  );

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
