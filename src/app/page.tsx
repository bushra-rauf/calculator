'use client'
import Header from "@/components/Header";
import Keyboard from "@/components/Keyborad";
import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState ('')
  const handleClick = (value: string) => {
    setInput((prev)=> prev + value)
  }
  return (
    <div className="font-sans  ">
      <Header pageTitle="Calculator"/>
     
      {/* Display */}
      <div className="bg-gray-100 p-4 mb-4 text-right text-2xl border max-w-3xs mx-auto">
        {input || "0"}
      </div>
      <Keyboard onClick={handleClick}/>
    </div>
  );
}
