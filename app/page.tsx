'use client';

import { Inter } from '@next/font/google'
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [hoverSakib, setHoverSakib] = useState(false);
    const [hoverCode, setHoverCode] = useState(false);
    const [hoverPhoto, setHoverPhoto] = useState(false);
    const [greeting, setGreeting] = useState("");
    useEffect(() => {
        const greetings = [
            "Happy Holidays.",
            "Hi.",
            "How are you?",
            "Welcome.",
            "All systems online."
        ];
        const randomIndex = Math.floor(Math.random() * greetings.length);
        setGreeting(greetings[randomIndex]);
    }, [])
  return (
    <main className={`${inter.className} sm:text-xl`}>
        <div className={`w-full h-screen flex justify-center items-center italic transition ${greeting == "" ? "opacity-0" : "opacity-100"}`}>{greeting}</div>
        <div className="p-2.5 absolute w-full bottom-2.5 grid grid-cols-3">
          <a href="/" onMouseEnter={() => setHoverSakib(true)} onMouseLeave={() => setHoverSakib(false)} className="flex justify-center">
              SAKIB{ hoverSakib && " RASUL"}
          </a>
          <div onMouseEnter={() => setHoverCode(true)} onMouseLeave={() => setHoverCode(false)} className="flex justify-center opacity-50 cursor-not-allowed">
              { !hoverCode ? "CODE" : "COMING SOON"}
          </div>
          <div onMouseEnter={() => setHoverPhoto(true)} onMouseLeave={() => setHoverPhoto(false)} className="flex justify-center opacity-50 cursor-not-allowed">
              { !hoverPhoto ? "PHOTO" : "COMING SOON"}
          </div>
        </div>
    </main>
  )
}
