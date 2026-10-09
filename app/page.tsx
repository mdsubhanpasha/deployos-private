"use client"
import { useState } from "react"
export default function Home(){
  const [q,setQ]=useState("")
  const [r,setR]=useState("")
  return(
    <main style={{padding:"40px",background:"#000",color:"#fff",minHeight:"100vh"}}>
      <h1>DeployOS - 81 Agents - $89/mo</h1>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="EKS deploy" style={{padding:"12px",width:"350px",color:"#000"}}/>
      <button onClick={async()=>{
        const res=await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,paid:false})})
        const d=await res.json();setR(d.result)
      }}>Free Preview</button>
      <pre>{r}</pre>
    </main>
  )
}