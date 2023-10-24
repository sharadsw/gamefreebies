import type { NextApiRequest, NextApiResponse } from "next";
import { getGamesList } from "@/lib/redis";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") res.status(405).send({ message: "Method Not Allowed" });
  const games = await getGamesList();
  res.status(200).send(games);
}
