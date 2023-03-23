import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;

  if (method === 'GET') {
    try {
      // Fetch data from another API endpoint using await
      const response = await fetch('https://api.lanyard.rest/v1/users/399911902211473410');
      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON using await
        const json = await response.json();
        // Log the JSON data
        console.log(json);
        // Send back a success response with status code 200 and JSON data
        res.status(200).json(json);
      } else {
        // Send back an error response with status code and message
        res.status(response.status).send(response.statusText);
      }
    } catch (error) {
      // Handle any errors or exceptions that might occur
      console.error(error);
      // Send back an internal server error response with status code 500 and error message
      res.status(500).send(error);
    }
  }

}