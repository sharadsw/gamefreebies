import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/*
 *  ROUTE: /api/subscribers/:id
 *  Methods:
 *      PUT: Confirms a subscriber unless query param `confirm` set to false
 *      DELETE: Unsubscribes an email
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = String(req.query.id);

  const confirmSubscriber = async (id: string) => {
    const value =
      "confirmed" in req.query
        ? Boolean(JSON.parse(String(req.query.confirmed)))
        : true;
    try {
      const confirmed = await prisma.subscriber.update({
        where: { id: id },
        data: {
          confirmed: value,
        },
      });
      res.status(200).send(confirmed);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  const deleteSubscriber = async (id: string) => {
    try {
      const deleted = await prisma.subscriber.delete({
        where: { id: String(id) },
      });
      res.status(200).send(deleted);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  try {
    switch (req.method) {
      case "PUT":
        confirmSubscriber(id);
        break;

      case "DELETE":
        deleteSubscriber(id);
        break;

      default:
        // No Matched Method
        res.status(405).send({ message: "Method Not Allowed" });
        break;
    }
  } catch (error) {
    // Unprocessable Entity
    res.status(422).send(error);
  }
}
