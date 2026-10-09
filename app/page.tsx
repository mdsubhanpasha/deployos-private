"use client"
import { useState } from "react"

export default function Home(){
  const [q,setQ]=useState("deploy EKS")
  const [r,setR]=useState(`[DeployOS Engine]
Query: deploy EKS

> Analyzing cost...
> Applying Karpenter Spot + Scale-to-zero
> Generating Terraform + ArgoCD

Result: EKS cost $2000 -> $89/mo
Stack: AWS, K8s, Terraform, FastAPI, LangChain
Status: Ready to ship`)
  const [locked,setLocked]=useState(true)

  const deploy = async (paid:boolean) => {
    const res = await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,paid})})
    const d = await res.json(); setR(d.result); setLocked(d.locked)
    if(d.locked){
      // PAY WALL - Stripe ki velthundi
      if(confirm("🔒 Full Terraform Code Lock ayindi! $29 pay chesi unlock cheyala?")){
        window.location.href = "https://buy.stripe.com/test_123" // ikkada nee Stripe link pettali
      }
    }
  }

  return(
    <main style={{padding:"40px",background:"#0a0a0a",color:"#fff",minHeight:"100vh",fontFamily:"Inter"}}>
      <h1 style={{fontSize:"48px",fontWeight:"800"}}>Ship Infra at <span style={{color:"#666"}}>95% lower cost.</span></h1>
      <p style={{color:"#888",marginTop:"10px"}}>DeployOS Private Engine — 81 Autonomous Agents • Terraform + Karpenter Spot + Scale-to-Zero • Built by Md Subhan Pasha</p>
      
      <div style={{marginTop:"30px",background:"#161616",padding:"24px",borderRadius:"16px",border:"1px solid #222"}}>
        <div style={{display:"flex",gap:"12px"}}>
          <input value={q} onChange={e=>setQ(e.target.value)} style={{flex:1,padding:"16px",background:"#0a0a0a",border:"1px solid #333",borderRadius:"12px",color:"#fff"}}/>
          <button onClick={()=>deploy(false)} style={{padding:"0 32px",background:"#fff",color:"#000",borderRadius:"12px",fontWeight:"700"}}>Deploy</button>
          <button onClick={()=>deploy(true)} style={{padding:"0 32px",background:"#0f0",color:"#000",borderRadius:"12px",fontWeight:"800"}}>Unlock $29</button>
        </div>
        <pre style={{marginTop:"20px",background:"#000",padding:"20px",borderRadius:"12px",color:"#0f0",whiteSpace:"pre-wrap",border: locked ? "1px solid #ff000055" : "1px solid #0f05",fontSize:"13px"}}>{r}</pre>
        {locked && <div style={{marginTop:"12px",color:"#ff4444",fontSize:"12px"}}>🔒 Full code locked - Pay $29 to unlock</div>}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginTop:"24px"}}>
        <div style={{background:"#161616",padding:"20px",borderRadius:"12px",border:"1px solid #222"}}><div style={{fontSize:"11px",color:"#666"}}>COST SAVING</div><div style={{fontWeight:"700",marginTop:"8px"}}>95% → $2000 to $89</div></div>
        <div style={{background:"#161616",padding:"20px",borderRadius:"12px",border:"1px solid #222"}}><div style={{fontSize:"11px",color:"#666"}}>STACK</div><div style={{fontWeight:"700",marginTop:"8px",fontSize:"13px"}}>AWS EKS • Karpenter • ArgoCD • Terraform</div></div>
        <div style={{background:"#161616",padding:"20px",borderRadius:"12px",border:"1px solid #222"}}><div style={{fontSize:"11px",color:"#666"}}>INVENTOR</div><div style={{fontWeight:"700",marginTop:"8px",fontSize:"13px"}}>Md Subhan Pasha — DeployOS™ Patent Pending</div></div>
      </div>
    </main>
  )
}