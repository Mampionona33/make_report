import dbConnect from "@/lib/dbConnect";
import jsonMiddleware from "./../middleware/jsonMiddleware";
import Outages from "../models/Outage/outageModel";
import { NextApiRequest, NextApiResponse } from "next";
import checkUploadDate from "../middleware/checkUploadDate";

export default async function outage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const outages = await Outages.find({});
        res.status(200).json({ success: true, data: outages });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const outages = req.body;
        checkUploadDate(req, res, async () => {
          await Outages.create(outages);
          res.status(201).json({ success: true });
        });
      } catch (error) {
        console.log(error);
        // res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export const middleware = jsonMiddleware;
