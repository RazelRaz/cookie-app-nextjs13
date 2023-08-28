import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req,res){
    return NextResponse.json({theme: 'dark'})
}