import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robotz',
  description: 'Run your robotz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Header />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}
