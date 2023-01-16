'use client';
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";
import HoverText from "./HoverText";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    <main className={`${inter.className} text-sm sm:text-xl`}>
        <div className={`w-full h-screen flex justify-center items-center italic transition ${greeting == "" ? "opacity-0" : "opacity-100"}`}>{greeting}</div>
        <div className="p-2.5 absolute w-full bottom-2.5 grid grid-cols-4">
            <HoverText href="/" text="SAKIB" textOnHover="SAKIB RASUL" />
            <HoverText className="opacity-50 cursor-not-allowed" text="CODE" textOnHover="COMING SOON" />
            <HoverText className="opacity-50 cursor-not-allowed" text="PHOTO" textOnHover="COMING SOON" />
            <HoverText className="opacity-50 cursor-not-allowed" text="WRITING" textOnHover="COMING SOON" />
        </div>
    </main>
  )
}
