import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    
    // Use provided date or fallback to today
    const targetDate = dateParam || new Date().toLocaleDateString('en-CA');
    
    // Get all records for the target date
    const todayRecords = await prisma.staffAttendanceRecord.findMany({
      where: { date: targetDate }
    });

    const faculties = await prisma.facultyUser.findMany();
    const admins = await prisma.adminUser.findMany();

    const allStaff = [
      ...admins.map((a, i) => ({ 
        id: a.id, 
        name: a.name, 
        role: a.role === 'superadmin' ? 'Super Admin' : 'Sub Admin', 
        branch: a.branch || 'Global',
        displayId: `Info${i + 1}`
      })),
      ...faculties.map((f, i) => ({ 
        id: f.id, 
        name: f.name, 
        role: 'Faculty', 
        branch: 'Global',
        displayId: `Info${admins.length + i + 1}`
      }))
    ];

    const formattedRecords = allStaff.map(staff => {
      const record = todayRecords.find(r => r.staffId === staff.id);
      
      let statusDisplay = 'Absent';
      if (record) {
        if (record.status === 'present' || record.status === 'ongoing') statusDisplay = 'Present';
        else if (record.status === 'absent') statusDisplay = 'Absent';
        else if (record.status === 'late') statusDisplay = 'Late';
        else if (record.status === 'on leave') statusDisplay = 'On Leave';
      }

      return {
        id: record?.id || null, // null if no record exists yet for today
        staffId: staff.id,
        name: staff.name,
        role: staff.role,
        branch: record?.clockInBranch || staff.branch,
        date: targetDate,
        time: record?.clockInTime || '--:--',
        outTime: record?.clockOutTime || '--:--',
        status: statusDisplay,
        displayId: staff.displayId,
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
