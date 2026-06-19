import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const records = await prisma.staffAttendanceRecord.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(records);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch staff attendance' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (data.id) {
      const updated = await prisma.staffAttendanceRecord.update({
        where: { id: data.id },
        data: {
          clockOutTime: data.clockOutTime,
          clockOutBranch: data.clockOutBranch,
          status: data.status,
        }
      });
      return NextResponse.json(updated);
    }

    const record = await prisma.staffAttendanceRecord.create({
      data: {
        staffId: data.staffId,
        date: data.date,
        clockInTime: data.clockInTime,
        clockInBranch: data.clockInBranch,
        status: data.status,
      }
    });
    return NextResponse.json(record);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create/update staff attendance record' }, { status: 500 });
  }
}
