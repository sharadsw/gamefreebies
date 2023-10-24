import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/*
 *  POST /api/subscribe
 *  Adds an unconfirmed user to the mailing list
 *  Request body: { email }
 *
 */

/*  GET /api/subscribe
 *  Fetch a list of subscribers
 *  Query params:
 *    - confirmed: true/false
 *      - Specify to get only a list of confirmed users or not. True by default
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        const validateEmail = (email: string): boolean => /^.+@.+$/.test(email);
        const { email } = req.body;

        if (!validateEmail(email)) {
          res.status(400).send({ message: "Invalid email" });
          return;
        }

        try {
          const result = await prisma.subscriber.create({
            data: {
              email: email,
            },
          });
          res.status(201).json(result);
        } catch (error) {
          res.send(error);
        }
        break;

      case "GET":
        const confirmed =
          "confirmed" in req.query
            ? Boolean(JSON.parse(String(req.query.confirmed)))
            : true;

        try {
          const subscribers = await prisma.subscriber.findMany({
            where: { confirmed: confirmed },
          });
          res.status(200).json(subscribers);
        } catch (error) {
          res.send(error);
        }
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
