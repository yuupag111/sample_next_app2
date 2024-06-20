// import Image from "next/image";
'use client'

import { useState } from 'react'

export default function Home() {
  var [input, setInput] = useState("")
  var [message, setMessage] = useState("名前は？")

  const doChange = (event: any)=> {
    setInput(event.target.value)
  }

  const doClick = ()=> {
    setMessage("ハロー " + input + "!!")
    setInput("")
  }


  return (
    <main>
     <h1 className="text-2xl m-5">Next.jsです</h1>
     <p className="text-lg m-5">シンプルアプリケーション！</p>

     <div className='m-5'>

      <p>{message}</p>

      <input type="text" onChange={doChange} value={input} className="p-1 border-solid border-2 border-gray-400"/>
      <button onClick={doClick} className="px-7 py-1.5 mx-2 bg-blue-800 text-white rounded-lg">クリック</button>
    
    </div>

    </main>
  );
}
