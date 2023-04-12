
import prisma from "@/prisma/migrations/client";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const capacities = await prisma.energycapacity.findMany()
    return NextResponse.json(capacities)
}