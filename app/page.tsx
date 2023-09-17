'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  const [botId, setBotId] = useState('1')

  const runBot = async (e: any) => {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/run-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ botId })
      })
      const data = await res.json()
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold'>Tinder Bot</h1>
      <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>

    </main>
  )
}

