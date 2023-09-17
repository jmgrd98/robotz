import { NextResponse } from "next/server";
import { exec } from 'child_process';

export async function POST(req: Request, res: any) {

    try {
        if (req.method !== 'POST') {
            return NextResponse.json(new Error('Method not allowed'), { status: 405 });
        }
        
        const { botId }: any = await req.json();
        
        if (!botId) {
            return NextResponse.json(new Error('botId is required'), { status: 400 });
        }
        await new Promise((resolve, reject) => {
            exec('python C:\\Users\\Zello\\Documents\\Github\\tinder-bot\\tinder_bot.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    reject(new Error(`Error: ${error}`));
                    return;
                }
                res.send(stdout);
                resolve(stdout);
            });
        });
        return NextResponse.json({ message: `Bot with ID ${botId} has been started.`, botId, status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(new Error('Internal server error'), { status: 500 });
    }
}

module.exports = {
    POST
}