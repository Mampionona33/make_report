import { NextFunction, Request, Response } from "express";
import moment from "moment";

export default function checkDate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { outages, repportDate } = req.body;

  const created = Object.values(outages).map((out: any) => Object.entries(out));

  let createdDates = [];

  let dateError = false;

  for (let i = 0; i < outages.length; i++) {
    const outage = outages[i];
    const createdDate = moment(outage.Created, "DD-MM-YYYY HH:mm:ss");
    if (createdDate.isValid()) {
      createdDates.push(createdDate);
    }
  }
  const reportDateMoment = moment(repportDate);
  if (reportDateMoment.isValid() && createdDates.length > 0) {
    createdDates.map((crDate) => {
      if (!reportDateMoment.isSame(crDate, "day")) {
        dateError = true;
      }
    });
  }

  if (dateError) {
    return res
      .status(400)
      .json({ message: "Report date must be the same as created date" });
  }

  next();
}
