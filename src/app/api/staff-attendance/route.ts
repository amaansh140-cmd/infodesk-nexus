import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const records = await prisma.staffAttendanceRecord.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const faculties = await prisma.facultyUser.findMany();
    const admins = await prisma.adminUser.findMany();

    const formattedRecords = records.map(record => {
      let name = 'Unknown';
      let role = 'Unknown';
      let branch = record.clockInBranch || 'Unknown';

      const faculty = faculties.find(f => f.id === record.staffId);
      if (faculty) {
        name = faculty.name;
        role = 'Faculty';
      } else {
        const admin = admins.find(a => a.id === record.staffId);
        if (admin) {
          name = admin.name;
          role = admin.role === 'superadmin' ? 'Super Admin' : 'Sub Admin';
          if (!record.clockInBranch && admin.branch) branch = admin.branch;
        }
      }

      return {
        id: record.id,
        staffId: record.staffId,
        name,
        role,
        branch,
        date: record.date,
        time: record.clockInTime || '--:--',
        status: record.status === 'present' ? 'Present' : 
                record.status === 'absent' ? 'Absent' : 
                record.status === 'late' ? 'Late' : 
                record.status === 'ongoing' ? 'Present' : 'On Leave',
      };
    });

    return NextResponse.json(formattedRecords);
  } catch (error) {
    console.error('Error fetching staff attendance:', error);
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
