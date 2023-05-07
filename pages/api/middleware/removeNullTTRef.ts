import { NextFunction, Request, Response } from "express";

function removeNullTTRef(req: Request, res: Response, next: NextFunction) {
  const data = req.body;
  const newData: any = Object.values(data)[0];

  const filteredData = newData.filter(
    (item: any) => item["TT Reference"] !== ""
  );
  req.body = { ...req.body, outages: filteredData };
  console.log(req.body);

  next();
}

export default removeNullTTRef;
