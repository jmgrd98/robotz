'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  const [botId, setBotId] = useState('')

  const runBot = async (e: any) => {
    e.preventDefault()
    const res = await fetch('/api/run-bot')
    const data = await res.json()
    setBotId(data.id)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold'>Bot ID: {botId}</h1>
      </div>

    </main>
  )
}

