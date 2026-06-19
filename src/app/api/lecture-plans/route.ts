import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const lecturePlans = await prisma.lecturePlan.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(lecturePlans);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch lecture plans' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const plan = await prisma.lecturePlan.create({
      data: {
        courseId: data.courseId,
        facultyId: data.facultyId,
        topic: data.topic,
        date: data.date,
        time: data.time,
        batch: data.batch,
        learningObjectives: data.learningObjectives,
        status: data.status,
      }
    });
    return NextResponse.json(plan);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lecture plan' }, { status: 500 });
  }
}
