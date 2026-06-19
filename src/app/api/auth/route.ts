import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { identifier, password } = data;

    // Super Admin Hardcoded
    if (identifier === 'Superadmin' && password === 'Admin@Super@Info') {
      return NextResponse.json({ id: 'SA-1', name: 'Superadmin', role: 'superadmin' });
    }

    // Sub Admin Hardcoded
    if (identifier === 'amaansh2120' && password === 'Amaansh2120') {
      return NextResponse.json({ id: 'SUB-1', name: 'Mr Amaan Shaikh', role: 'subadmin', branch: 'Shashtri Nagar' });
    }

    // Check Admin Table
    const admin = await prisma.adminUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (admin && admin.password === password) {
      return NextResponse.json({ id: admin.id, name: admin.name, role: admin.role, branch: admin.branch });
    }

    // Check Faculty Table
    const faculty = await prisma.facultyUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (faculty && faculty.password === password) {
      return NextResponse.json({ id: faculty.id, name: faculty.name, role: 'faculty' });
    }

    // Check Student Table
    const student = await prisma.student.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }, { rollNo: identifier }]
      }
    });

    if (student && student.password === password) {
      return NextResponse.json({ id: student.id, name: student.name, role: 'student', branch: student.branch });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
