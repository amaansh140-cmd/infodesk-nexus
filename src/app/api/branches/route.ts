import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const branches = await prisma.branch.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(branches);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch branches' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newBranch = await prisma.branch.create({
      data: {
        name: body.name,
        admin: body.admin,
        students: body.students || 0,
        status: body.status || 'Active'
      }
    });
    return NextResponse.json(newBranch, { status: 201 });
  } catch (error: any) {
    console.error('Error creating branch:', error);
    return NextResponse.json({ error: error.message || 'Failed to create branch' }, { status: 500 });
  }
}
