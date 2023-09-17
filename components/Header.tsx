"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "../node_modules/next-auth/providers";

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

  const { data: session } = useSession() as unknown as { data: Session | null };

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <header className="flex justify-between items-center p-5 bg-black">
      <h1 className="text-white text-3xl font-bold">Robotz</h1>

      {session?.user ? (
        <div className="flex gap-5 items-center">
          <Image
            src={
              session.user.image || "../public/assets/icons/default-profile.png"
            }
            width={37}
            height={37}
            alt="Profile image"
            className="rounded-full"
          />
          <button
            type="button"
            onClick={() => {
              signOut();
            }}
            className="p-3 rounded-xl bg-white text-black"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="bg-white p-3 rounded-xl text-black"
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </header>
  );
}
