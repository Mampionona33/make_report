import dbConnect from "@/lib/dbConnect";
import Outage from "./models/outageModel";
import { Request, Response } from "express";

export default async function outage(req: Request, res: Response) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const outage = await Outage.find({});
        res.status(200).json({ success: true, data: outage });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      break;
    default:
      break;
  }
}
