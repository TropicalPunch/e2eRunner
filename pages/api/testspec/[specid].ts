// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import getConfig from "next/config";
import { join } from "path";

const { serverRuntimeConfig } = getConfig();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let testDir = serverRuntimeConfig.TEST_PATH;
  const myFilePath = join(testDir, `${req.query.specid}.spec.ts`);

  switch (req.method) {
    case "GET":
      const data = await fs.readFile(myFilePath, "utf8");
      res.status(200).send(data);
      break;
    case "POST":
    case "PUT":
      await fs.writeFile(myFilePath, req.body);
      res.status(200).json({ message: `spec id ${req.query.specid} was saved` });
      break;
    case "DELETE":
      res.status(200).json({ message: `spec id ${req.query.specid} was deleted` });
      await fs.rm(myFilePath);
      break;

    default:
      res.status(400).json({ message: "method not supported" });
  }
}