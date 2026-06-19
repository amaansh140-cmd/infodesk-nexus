import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const student = await prisma.student.create({
      data: {
        rollNo: data.rollNo,
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
        batch: data.batch,
        branch: data.branch,
        status: data.status,
      }
    });
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}
