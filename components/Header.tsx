'use client'

import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion} from 'next-auth/react'
import {BuiltInProviderType} from "../node_modules/next-auth/providers";

export default function Header() {
     
    interface User {
        name?: string;
        email?: string;
        image?: string;
        id: string;
    }
    
    interface Session {
        expires: string;
        user: User;
    }

    const {data: session} = useSession() as unknown as { data: Session | null };

    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        fetchProviders()
    }, [])
    
      return (
     <header className="flex justify-between items-center p-5 bg-black">
        <h1 className="text-white text-3xl font-bold">Robotz</h1>
        {providers && Object.values(providers).map((provider: any) => (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)}
                                    className='bg-black p-3 rounded-2xl text-white'>Sign In</button>
                        ))}
    </header>
      )
    }