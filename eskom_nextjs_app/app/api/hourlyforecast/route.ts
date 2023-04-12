import prisma from "@/prisma/migrations/client";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const capacities = await prisma.hourlyforecasts.findMany({
        orderBy: {
          Date_Time_Hour_Beginning: 'asc'
        }
      })
    return NextResponse.json(capacities)
}