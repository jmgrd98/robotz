'use client'

import Image from 'next/image'

export default function Home() {

  const botId = '1'

  function runBot() {
    fetch('/api/run-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        botId
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error.message);
    });
    console.log('rodando bot');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>
    </main>
  )
}

