import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {

    if (req.method !== 'POST') {
        return NextResponse.json(new Error('Method not allowed'), { status: 405 });
    }
    
    const { botId }: any = req.body;
    
    if (!botId) {
        return NextResponse.json(new Error('botId is required'), { status: 400 });
    }

    return NextResponse.json({ message: `Bot with ID ${botId} has been started.` });
    
    console.log(req.method)
    console.log(req.body)
}

module.exports = {
    POST
}