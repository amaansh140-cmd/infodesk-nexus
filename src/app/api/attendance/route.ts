import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const records = await prisma.attendanceRecord.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(records);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch attendance' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const record = await prisma.attendanceRecord.create({
      data: {
        studentId: data.studentId,
        courseId: data.courseId,
        date: data.date,
        status: data.status,
      }
    });
    return NextResponse.json(record);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create attendance record' }, { status: 500 });
  }
}
