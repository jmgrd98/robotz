'use client'

import Image from 'next/image'
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [botId, setBotId] = useState('1')

  const { data: session } = useSession() as unknown as { data: Session | null };

  const runBot = async (e: any) => {
    e.preventDefault()


    if (!session?.user) {
      toast.error('Please login to run the bot')
      return
    }


    setIsLoading(true)
    
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl font-bold'>Tinder Bot</h1>
      {isLoading ? (
            <div className="loader"></div>
        ) : (
            <button className='p-5 rounded bg-black text-white' onClick={runBot}>Rodar bot</button>
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={true}
          pauseOnHover={false}
        />
    </main>
  )
}

