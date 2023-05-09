import { NextApiRequest, NextApiResponse } from "next";

async function removeNullTTRef(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const data = req.body;
  const newData: any = Object.values(data)[0];

  const filteredData = newData.filter(
    (item: any) => item["TT Reference"] !== ""
  );
  console.log(filteredData);
  req.body = { ...req.body, outages: filteredData };
  // console.log(req.body);

  next();
}

export default removeNullTTRef;
