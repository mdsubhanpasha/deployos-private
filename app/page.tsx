"use client"
import { useState } from "react"
export default function Home(){
  const [q,setQ]=useState("deploy EKS")
  const [r,setR]=useState("")
  const [locked,setLocked]=useState(true)
  const [loading,setLoading]=useState(false)

  const callApi = async (paid:boolean) => {
    setLoading(true)
    const res = await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,paid})})
    const d = await res.json()
    setR(d.result)
    setLocked(d.locked)
    setLoading(false)
    if(!paid && d.locked){
      // optional alert
    }
  }

  return(
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"40px"}}>
      <div style={{maxWidth:"900px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"40px"}}>
          <div style={{background:"#fff",color:"#000",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontWeight:"900"}}>D</div>
          <span style={{fontWeight:"700"}}>DeployOS Private</span>
          <span style={{fontSize:"10px",background:"#222",padding:"2px 8px",borderRadius:"12px",color:"#888"}}>BETA • PATENT PENDING</span>
        </div>

        <h1 style={{fontSize:"52px",fontWeight:"900",lineHeight:"1.1"}}>Ship Infra at <span style={{color:"#666"}}>95% lower cost.</span></h1>
        <p style={{color:"#666",marginTop:"16px",fontSize:"14px"}}>DeployOS Private Engine — 81 Autonomous Agents • Terraform + Karpenter Spot + Scale-to-Zero • Built by Md Subhan Pasha</p>

        <div style={{background:"#151515",border:"1px solid #222",borderRadius:"20px",padding:"24px",marginTop:"32px"}}>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="What to deploy?" style={{flex:"1",minWidth:"200px",padding:"14px 20px",background:"#0a0a0a",border:"1px solid #2a2a2a",borderRadius:"12px",color:"#fff",outline:"none"}}/>
            <button onClick={()=>callApi(false)} disabled={loading} style={{padding:"14px 24px",background:"#2a2a2a",color:"#fff",borderRadius:"12px",fontWeight:"600",border:"none",cursor:"pointer"}}>{loading ? "..." : "Deploy (Free)"}</button>
            <button onClick={()=>callApi(true)} disabled={loading} style={{padding:"14px 24px",background:"#0f0",color:"#000",borderRadius:"12px",fontWeight:"800",border:"none",cursor:"pointer"}}>Unlock $29</button>
          </div>
          
          <div style={{marginTop:"20px",background:"#000",borderRadius:"12px",padding:"20px",border: locked ? "1px solid #ff000033" : "1px solid #00ff0033",minHeight:"180px"}}>
            <pre style={{color:"#0f0",fontSize:"13px",whiteSpace:"pre-wrap",fontFamily:"monospace"}}>{r || "[DeployOS Engine] Ready...\n\n> Type query and hit Deploy"}</pre>
          </div>
          {r && locked && <div style={{marginTop:"12px",color:"#ff4444",fontSize:"13px",fontWeight:"700"}}>🔒 PAY $29 TO UNLOCK FULL TERRAFORM CODE — Click Unlock $29</div>}
          {r && !locked && <div style={{marginTop:"12px",color:"#0f0",fontSize:"13px",fontWeight:"700"}}>✅ UNLOCKED — Full production code ready!</div>}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px",marginTop:"20px"}}>
          <div style={{background:"#151515",border:"1px solid #222",padding:"18px",borderRadius:"12px"}}><div style={{fontSize:"10px",color:"#555"}}>COST SAVING</div><div style={{marginTop:"8px",fontWeight:"700"}}>95% → $2000 to $89</div></div>
          <div style={{background:"#151515",border:"1px solid #222",padding:"18px",borderRadius:"12px"}}><div style={{fontSize:"10px",color:"#555"}}>STACK</div><div style={{marginTop:"8px",fontWeight:"600",fontSize:"13px"}}>AWS EKS • Karpenter • ArgoCD • Terraform</div></div>
          <div style={{background:"#151515",border:"1px solid #222",padding:"18px",borderRadius:"12px"}}><div style={{fontSize:"10px",color:"#555"}}>INVENTOR</div><div style={{marginTop:"8px",fontWeight:"600",fontSize:"12px"}}>Md Subhan Pasha — DeployOS™ Patent Pending</div></div>
        </div>

        <div style={{textAlign:"center",marginTop:"40px",fontSize:"11px",color:"#333"}}>Protected Intellectual Property • DeployOS Private™ • Patent Filed by Md Subhan Pasha • Contact: mdsubhanpasha@gmail.com</div>
      </div>
    </main>
  )
}