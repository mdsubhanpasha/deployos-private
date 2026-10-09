"use client"
import { useState } from "react"
export default function Home(){
  const [q,setQ]=useState("")
  const [r,setR]=useState("")
  const [locked,setLocked]=useState(false)
  return(
    <main style={{padding:"40px",background:"#000",color:"#fff",minHeight:"100vh"}}>
      <h1>🚀 DeployOS - 81 Agents - $89/mo</h1>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="EKS deploy chey" style={{padding:"12px",width:"350px",color:"#000",marginTop:"20px"}}/>
      <button onClick={async()=>{
        const res=await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,paid:false})})
        const d=await res.json();setR(d.result);setLocked(d.locked)
      }} style={{padding:"12px",marginLeft:"10px",background:"#333",color:"#fff"}}>Free Preview</button>
      <button onClick={async()=>{
        const res=await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,paid:true})})
        const d=await res.json();setR(d.result);setLocked(d.locked)
      }} style={{padding:"12px",marginLeft:"10px",background:"#0f0",color:"#000",fontWeight:"bold"}}>Pay $29</button>
      <pre style={{marginTop:"20px",background:"#111",padding:"20px",whiteSpace:"pre-wrap",border: locked ? "2px solid red" : "2px solid #0f0"}}>{r}</pre>
    </main>
  )
}
