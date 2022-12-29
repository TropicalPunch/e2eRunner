// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import fs from "fs/promises";

const { serverRuntimeConfig } = getConfig();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    let testDir = serverRuntimeConfig.TEST_PATH;

    switch (req.method) {
        case "GET":
            const specs = await fs.readdir(testDir);
            res.status(200).json(specs);
            break;
        default:
            res.status(400).json({ message: "method not supported" });
    }

}