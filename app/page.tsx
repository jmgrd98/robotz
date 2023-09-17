'use client'

import Image from 'next/image'

export default function Home() {

  function runBot() {
    fetch('/api/run-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        botId: '1'
      })
    })
    console.log('rodando bot');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>
    </main>
  )
}

