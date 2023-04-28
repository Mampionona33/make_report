import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const jsonMiddleware =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST" || req.method === "PUT") {
      // Traitement JSON de la requête si nécessaire
      if (req.headers["content-type"] === "application/json") {
        req.body = JSON.parse(req.body);
      }
    }
    return handler(req, res);
  };

export default jsonMiddleware;
