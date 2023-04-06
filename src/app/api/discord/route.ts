import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import WebSocket from 'ws';
export async function GET(req: Request, res: Response) {
 
// Create a WebSocket instance
const socket = new WebSocket('wss://api.lanyard.rest/socket');

// Define a callback function to handle WebSocket open event
socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened:', event);

  // Send Opcode 2: Initialize message to subscribe to a user's presence
  const initializeMessage = {
    op: 2,
    d: {
      subscribe_to_ids: ['399911902211473410'] // Replace with user IDs you want to subscribe to
    }
  };
  socket.send(JSON.stringify(initializeMessage));
});

// Define a callback function to handle WebSocket message event
socket.addEventListener('message', (event) => {
  console.log('WebSocket message received:', event);

  // Parse the message as JSON
  const message = JSON.parse(event.data.toString('utf-8'));
  // Handle different opcodes
  switch (message.op) {
    case 0: // Opcode 0: Event
      // Handle different event types
      switch (message.t) {
        case 'INIT_STATE':
          // Handle INIT_STATE event
          console.log('INIT_STATE event:', message.d);
          break;
        case 'PRESENCE_UPDATE':
          // Handle PRESENCE_UPDATE event
          console.log('PRESENCE_UPDATE event:', message.d);
          break;
        // Add more cases for other event types as needed
      }
      break;
    // Handle other opcodes as needed
  }
});

// Define a callback function to handle WebSocket close event
socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});

// Define a callback function to handle WebSocket error event
socket.addEventListener('error', (event) => {
  console.log('WebSocket error:', event);
});
}


