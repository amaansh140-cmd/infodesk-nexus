import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const admins = await prisma.adminUser.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(admins);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch admin users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newAdmin = await prisma.adminUser.create({
      data: {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
        role: body.role,
        branch: body.branch
      }
    });
    return NextResponse.json(newAdmin, { status: 201 });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
