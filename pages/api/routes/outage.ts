import dbConnect from "@/lib/dbConnect";
import Outage from "../models/outageModel";
import { Request, Response } from "express";
import jsonMiddleware from "./../middleware/jsonMiddleware";

export default async function outage(req: Request, res: Response) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const outages = await Outage.find({});
        res.status(200).json({ success: true, data: outages });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const outages = req.body;
        await Outage.create(outages);
        res.status(201).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export const middleware = jsonMiddleware;
