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
  let testDir = serverRuntimeConfig.TEST_PATH;
  const myFilePath = join(testDir, `specid_${req.query.specid}.txt`);
  switch (req.method) {
    case "GET":
      const data = await fs.readFile(myFilePath, "utf8");
      res.status(200).send({ message: data.toString() } as any);
      break;
    default:
      await fs.open(myFilePath, "w");
      await fs.writeFile(myFilePath, req.body);
      res.status(200).json(`spec id ${req.query.specid} was saved` as any);
  }
}
