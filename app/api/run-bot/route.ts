// import { NextResponse } from "next/server";

// export async function POST(req: Request, res: Response) {

//     try {
//         if (req.method !== 'POST') {
//             return NextResponse.json(new Error('Method not allowed'), { status: 405 });
//         }
        
//         const { botId }: any = req.body;
        
//         if (!botId) {
//             return NextResponse.json(new Error('botId is required'), { status: 400 });
//         }
//         return NextResponse.json({ message: `Bot with ID ${botId} has been started.`, botId, status: 200 });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(new Error('Internal server error'), { status: 500 });
//     }
// }

// module.exports = {
//     POST
// }

import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: Request, res: Response) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { botId } = req.body;
    
    if (!botId) {
      return res.status(400).json({ error: 'botId is required' });
    }
  
    // Log data to console
    console.log("Method:", req.method);
    console.log("Body:", req.body);
  
    return res.status(200).json({ message: `Bot with ID ${botId} has been started.` });
  }

  module.exports = {
    POST
}