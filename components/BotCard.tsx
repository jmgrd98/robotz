"use client";

import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";

export default function BotCard({title, description, icon}) {
  const [isLoading, setIsLoading] = useState(false);
  const [botId, setBotId] = useState('1')
  const { data: session } = useSession() as unknown as { data: Session | null };

  const runBot = async (e: any) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error("Please login to run the bot");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/run-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ botId }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-72">
        <div className="flex-shrink-0">
          <Image
            className="m-5"
            src={icon}
            alt='Icon'
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between items-center">
          <div className="flex-1 text-center items-center">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">
              {description}
            </p>
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <button
                className="m-5 p-5 rounded bg-black text-white"
                onClick={runBot}
              >
                Try bot
              </button>
            )}
          </div>
        </div>
      </div>
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
    </>
  );
}
