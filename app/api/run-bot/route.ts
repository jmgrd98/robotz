import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {

    try {
        if (req.method !== 'POST') {
            return NextResponse.json(new Error('Method not allowed'), { status: 405 });
        }
        
        const { botId }: any = await req.json();
        
        if (!botId) {
            return NextResponse.json(new Error('botId is required'), { status: 400 });
        }
        return NextResponse.json({ message: `Bot with ID ${botId} has been started.`, botId, status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(new Error('Internal server error'), { status: 500 });
    }
}

module.exports = {
    POST
}