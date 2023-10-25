import type { NextApiRequest, NextApiResponse } from "next";
import { fromEnv } from "@aws-sdk/credential-providers";
import {
  LambdaClient,
  InvokeCommand,
  InvokeCommandInput,
} from "@aws-sdk/client-lambda";
import { logger } from "@/lib/utils";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    res.status(405).send({ message: "Method Not Allowed" });
  const client = new LambdaClient({
    credentials: fromEnv(),
  });

  // Invocation Request
  const input: InvokeCommandInput = {
    FunctionName: process.env.CONFIRM_EMAIL_LAMBDA,
    InvocationType: "Event",
    LogType: "Tail",
    Payload: JSON.stringify(req.body),
  };
  const command = new InvokeCommand(input);
  const response = await client.send(command);

  logger.info({ data: req.body }, "Confirm email sent");
  res.status(response.StatusCode || 200).send({ message: "lambda executed" });
}
