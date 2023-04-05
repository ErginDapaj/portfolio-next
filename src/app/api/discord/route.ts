import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
export async function GET(req: Request, res: Response) {

      // Fetch data from another API endpoint using await
      const response = await fetch('https://api.lanyard.rest/v1/users/399911902211473410');
      // Check if the response is ok
      if (response.ok) {
        // Parse the response as JSON using await
        const json = await response.json();
        // Log the JSON data
        console.log(json);
        // Send back a success response with status code 200 and JSON data
        
        return NextResponse.json(json);

      } else {
        // Send back an error response with status code and message
        NextResponse.json({ msg: 'There was an issue getting user info' });
      }
    } 