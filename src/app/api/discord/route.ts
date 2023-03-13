import { NextApiRequest, NextApiResponse } from 'next';

import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const API_ENDPOINT = 'https://discord-readme-badge.vercel.app';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;

  if (method === 'GET') {
    
    }
  
}
