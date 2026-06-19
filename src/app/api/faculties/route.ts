import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const faculties = await prisma.facultyUser.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(faculties);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch faculties' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const faculty = await prisma.facultyUser.create({
      data: {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
        phone: data.phone,
        department: data.department,
        status: data.status,
        assignedCourses: data.assignedCourses || [],
        assignedBranches: data.assignedBranches || [],
      }
    });
    return NextResponse.json(faculty);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create faculty' }, { status: 500 });
  }
}
