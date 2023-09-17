'use client'

import Image from 'next/image'
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import BotCard from '@/components/BotCard';
import tinderIcon from "../public/icons/tinder-icon.svg";
import twitterIcon from "../public/icons/Twitter X.svg"

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
    <main className="flex flex-col items-center justify-between p-8">
      <h1 className='text-5xl mb-24 font-bold'>Choose your bot</h1>
      <div className='flex flex-wrap justify-evenly gap-10 w-full'>
      <BotCard
        title='Tinder Bot'
        description='Automate your Tinder swipes and matches!'
        icon={tinderIcon}
      />
      <BotCard
        title='Twiter Bot'
        description='Automate your tweets!'
        icon={twitterIcon}
      />
      </div>
    </main>
  )
}

