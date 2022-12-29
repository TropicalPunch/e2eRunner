// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import { join } from "path";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  (async function () {
    const myFilePath = join(`/Users/mf840u/git/e2eRunner/e2e-runner/`, `specid_${req.query.specid}.txt`);
    await fs.open(myFilePath, "w");
    await fs.writeFile(myFilePath, req.body);
  })();

  res.status(200).json(`spec id ${req.query.specid} was saved`);
}
