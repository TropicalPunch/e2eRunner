// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { runTests } from '../../utils/playwright-runner'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const testRes = await runTests();
    res.status(200).json(testRes);
  } catch (e) {
    res.status(500).json(e as any);
  }
}
