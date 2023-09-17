'use client'

import Image from 'next/image'

export default function Home() {

  const botId = '1'

  async function runBot() {
    try {
      const response = await fetch('/api/run-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          botId
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
        return Error;
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      console.log('There was a problem:', error.message);
      return error;
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>
    </main>
  )
}

