import {NextResponse} from 'next/server';

export async function POST(req: Request, res: Response) {
  const { body } = req
  const { botId } = body
  const { bot } = await import('./controller')
  const result = await bot(botId)
  return res.json()
}