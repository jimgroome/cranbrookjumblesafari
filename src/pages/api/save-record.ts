import { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { v4 as uuid } from "uuid";

const saveRecord = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body } = req;

    const record = { ...body, id: uuid() };

    const {
      recordType,
      name,
      email,
      address1,
      address2,
      town,
      postcode,
      phone,
      lat,
      long,
      agreeSign,
    } = record;

    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: "us14",
    });

    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_lIST_ID as string,
      {
        email_address: email,
        status: "transactional",
        merge_fields: {
          NAME: name,
          PHONE: phone,
          ADDRESS1: address1 || undefined,
          ADDRESS2: address2 || undefined,
          TOWN: town || undefined,
          POSTCODE: postcode || undefined,
          LAT: lat ? lat.toString() : undefined,
          LONG: long ? long.toString() : undefined,
          RECORDTYPE: recordType,
          AGREESIGN: agreeSign ? agreeSign.toString() : undefined,
        },
      },
      {
        skipMergeValidation: false,
      }
    );

    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default saveRecord;
