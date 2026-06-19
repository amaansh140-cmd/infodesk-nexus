import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch notices' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const notice = await prisma.notice.create({
      data: {
        title: data.title,
        content: data.content,
        type: data.type,
        author: data.author,
        date: data.date,
        targetBranches: data.targetBranches || [],
        targetRoles: data.targetRoles || [],
        pinned: data.pinned || false,
      }
    });
    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create notice' }, { status: 500 });
  }
}
