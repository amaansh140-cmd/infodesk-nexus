import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const currentYear = new Date().getFullYear().toString();
    
    // Get all records where date starts with current year (e.g., '2026')
    const yearlyRecords = await prisma.staffAttendanceRecord.findMany({
      where: { 
        date: {
          startsWith: currentYear
        }
      },
      orderBy: {
        date: 'desc'
      }
    });

    // Fetch all admins and faculties to map names and roles
    const allAdmins = await prisma.adminUser.findMany();
    const allFaculties = await prisma.facultyUser.findMany();

    const staffMap = new Map();
    
    allAdmins.forEach(admin => {
      staffMap.set(admin.id, {
        name: admin.name,
        role: admin.role === 'superadmin' ? 'Super Admin' : 'Sub Admin',
        branch: admin.branch || 'Global'
      });
    });

    allFaculties.forEach(faculty => {
      staffMap.set(faculty.id, {
        name: faculty.name,
        role: 'Faculty',
        branch: Array.isArray(faculty.assignedBranches) && faculty.assignedBranches.length > 0 
          ? (faculty.assignedBranches as string[])[0] 
          : 'Global'
      });
    });

    // Format output
    const formattedRecords = yearlyRecords.map(record => {
      const staffInfo = staffMap.get(record.staffId) || { name: 'Unknown User', role: 'Unknown', branch: 'Unknown' };
      
      return {
        id: record.id,
        staffId: record.staffId,
        name: staffInfo.name,
        role: staffInfo.role,
        branch: staffInfo.branch,
        date: record.date,
        time: record.clockInTime || '--:--',
        status: record.status.charAt(0).toUpperCase() + record.status.slice(1) // Capitalize status
      };
    });

    return NextResponse.json(formattedRecords);
  } catch (error: any) {
    console.error('Yearly Staff Attendance API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch yearly staff attendance' },
      { status: 500 }
    );
  }
}
