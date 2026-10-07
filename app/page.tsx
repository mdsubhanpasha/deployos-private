"use client"
import { useState } from "react"

export default function Page(){
  const [q,setQ]=useState(""); 
  const [res,setRes]=useState("");
  const [loading,setLoading]=useState(false);

  const deploy=async()=>{
    if(!q) return;
    setLoading(true);
    const r=await fetch("/api/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q})}); 
    const d=await r.json(); 
    setRes(d.result);
    setLoading(false);
  }

  return (
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"white", fontFamily:"Inter, system-ui, sans-serif"}}>
      {/* Header */}
      <div style={{borderBottom:"1px solid #222", padding:"16px 40px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div style={{width:32, height:32, background:"white", color:"black", display:"grid", placeItems:"center", fontWeight:900, borderRadius:6}}>D</div>
          <span style={{fontWeight:700, letterSpacing:"-0.5px"}}>DeployOS Private</span>
          <span style={{fontSize:11, background:"#1a1a1a", border:"1px solid #333", padding:"2px 8px", borderRadius:20, color:"#888"}}>BETA • PATENT PENDING</span>
        </div>
        <div style={{fontSize:12, color:"#666"}}>© 2026 Md Subhan Pasha • Patent by Pasha</div>
      </div>

      <div style={{maxWidth:900, margin:"60px auto", padding:"0 40px"}}>
        <h1 style={{fontSize:48, fontWeight:800, letterSpacing:"-2px", lineHeight:1.1, marginBottom:12}}>Ship Infra at <span style={{color:"#888"}}>95% lower cost.</span></h1>
        <p style={{color:"#888", fontSize:16, marginBottom:32}}>DeployOS Private Engine — 81 Autonomous Agents • Terraform + Karpenter Spot + Scale-to-Zero • Built by Md Subhan Pasha</p>

        <div style={{background:"#111", border:"1px solid #222", borderRadius:16, padding:24}}>
          <div style={{display:"flex", gap:12}}>
            <input 
              value={q} 
              onChange={e=>setQ(e.target.value)} 
              placeholder="e.g. Deploy my FastAPI + LangChain on EKS with cost $89/mo" 
              style={{flex:1, background:"#0a0a0a", border:"1px solid #333", borderRadius:10, padding:"14px 16px", color:"white", outline:"none"}}
            />
            <button onClick={deploy} disabled={loading} style={{background:"white", color:"black", border:0, borderRadius:10, padding:"0 28px", fontWeight:700, cursor:"pointer"}}>
              {loading ? "..." : "Deploy"}
            </button>
          </div>

          {res && (
            <pre style={{marginTop:24, background:"black", border:"1px solid #222", borderRadius:12, padding:20, color:"#0f0", fontSize:13, lineHeight:1.6, whiteSpace:"pre-wrap", overflowX:"auto"}}>{res}</pre>
          )}
          {!res && (
            <div style={{marginTop:24, height:120, background:"black", border:"1px solid #1a1a1a", borderRadius:12, display:"grid", placeItems:"center", color:"#333", fontSize:13}}>Engine output will appear here...</div>
          )}
        </div>

        <div style={{marginTop:24, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12}}>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:12, padding:16}}><div style={{fontSize:11, color:"#666"}}>COST SAVING</div><div style={{fontSize:20, fontWeight:700, marginTop:4}}>95% → $2000 to $89</div></div>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:12, padding:16}}><div style={{fontSize:11, color:"#666"}}>STACK</div><div style={{fontSize:13, fontWeight:600, marginTop:4}}>AWS EKS • Karpenter • ArgoCD • Terraform</div></div>
          <div style={{background:"#111", border:"1px solid #222", borderRadius:12, padding:16}}><div style={{fontSize:11, color:"#666"}}>INVENTOR</div><div style={{fontSize:13, fontWeight:600, marginTop:4}}>Md Subhan Pasha — DeployOS™ Patent Pending</div></div>
        </div>

        <div style={{marginTop:60, textAlign:"center", color:"#444", fontSize:12, borderTop:"1px solid #111", paddingTop:24}}>
          Protected Intellectual Property • DeployOS Private™ • Patent Filed by Md Subhan Pasha • Unauthorized copying prohibited • Contact: mdsubhanpasha@gmail.com
        </div>
      </div>
    </div>
  )
}
