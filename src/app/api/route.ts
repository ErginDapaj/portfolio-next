import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log('HELLO')
  if (req.method === 'GET') {
    const response = await fetch('https://discord-readme-badge.vercel.app/api?id=399911902211473410');
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
