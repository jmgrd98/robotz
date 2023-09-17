'use client'

import { useState } from "react"

export default function Header() {
     
    
    
      return (
     <header className="flex justify-between items-center p-5 bg-black">
        <h1 className="text-white text-3xl font-bold">Robotz</h1>
        <button className="bg-white text-black p-3 rounded">Login</button>
    </header>
      )
    }