import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-west-2",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const saveRecord = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const DynamoDB = new AWS.DynamoDB.DocumentClient();
    const now = new Date();
    const time = now.toISOString();

    const { body } = req;

    const record = { ...body, id: uuid(), time };

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

    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default saveRecord;
