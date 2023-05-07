import dbConnect from "@/lib/dbConnect";
import { NextFunction, Request, Response } from "express";
import jsonMiddleware from "./../middleware/jsonMiddleware";
import Outages from "../models/Outage/outageModel";
import checkDate from "../middleware/checkDate";
import { NextApiRequest, NextApiResponse } from "next";

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
        // if (checkDate(req, res)) {
        await Outages.create(outages);
        res.status(201).json({ success: true });
        // }
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
