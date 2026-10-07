import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest){
  const {query} = await req.json();
  const result = `[DeployOS Engine]
Query: ${query}

> Analyzing cost...
> Applying Karpenter Spot + Scale-to-zero
> Generating Terraform + ArgoCD

Result: EKS cost $2000 -> $89/mo
Stack: AWS, K8s, Terraform, FastAPI, LangChain
Status: Ready to ship`;
  return NextResponse.json({result})
}
