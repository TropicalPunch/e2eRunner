// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import getConfig from "next/config";
import { join } from "path";

const { serverRuntimeConfig } = getConfig();

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  let testDir = serverRuntimeConfig.TEST_PATH;
  const myFilePath = join(testDir, `specid_${req.query.specid}.txt`);
  await fs.open(myFilePath, "w");
  await fs.writeFile(myFilePath, req.body);
  res.status(200).json(`spec id ${req.query.specid} was saved`);
}
