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

    const userRole = request.headers.get('x-user-role');
    const isAdmin = userRole === 'superadmin' || userRole === 'subadmin';

    const allStaff = [
      ...admins.map((a, i) => ({ 
        id: a.id, 
        name: a.name, 
        role: a.role === 'superadmin' ? 'Super Admin' : 'Sub Admin', 
        branch: a.branch || 'Global',
        displayId: `Info${i + 1}`,
        deviceVerificationCode: isAdmin ? a.deviceVerificationCode : null
      })),
      ...faculties.map((f, i) => ({ 
        id: f.id, 
        name: f.name, 
        role: 'Faculty', 
        branch: 'Global',
        displayId: `Info${admins.length + i + 1}`,
        deviceVerificationCode: isAdmin ? f.deviceVerificationCode : null
      }))
    ];

    const formattedRecords = allStaff.map(staff => {
      const staffRecords = todayRecords
        .filter(r => r.staffId === staff.id)
        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      
      let statusDisplay = 'Absent';
      if (staffRecords.length > 0) {
        const hasOngoing = staffRecords.some(r => r.status === 'ongoing');
        if (hasOngoing) statusDisplay = 'Present';
        else {
          const lastRec = staffRecords[staffRecords.length - 1];
          if (lastRec.status === 'present' || lastRec.status === 'ongoing') statusDisplay = 'Present';
          else if (lastRec.status === 'late') statusDisplay = 'Late';
          else if (lastRec.status === 'on leave') statusDisplay = 'On Leave';
        }
      }

      // Latest record used for basic fields like branch if needed
      const lastRecord = staffRecords.length > 0 ? staffRecords[staffRecords.length - 1] : null;

      const sessions = staffRecords.map(r => ({
        id: r.id,
        in: r.clockInTime || '--:--',
        out: r.clockOutTime || '--:--'
      }));

      return {
        id: lastRecord?.id || null, // null if no record exists yet for today
        staffId: staff.id,
        name: staff.name,
        role: staff.role,
        branch: lastRecord?.clockInBranch || staff.branch,
        date: targetDate,
        sessions: sessions, // Array of { id, in, out }
        status: statusDisplay,
        displayId: staff.displayId,
        deviceVerificationCode: staff.deviceVerificationCode || null,
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
