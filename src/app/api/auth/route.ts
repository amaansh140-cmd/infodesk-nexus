import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { identifier, password, deviceId, verificationCode } = data;

    // Super Admin Hardcoded (bypasses device verification)
    if (identifier === 'Superadmin' && password === 'Admin@Super@Info') {
      return NextResponse.json({ id: 'SA-1', name: 'Superadmin', role: 'superadmin' });
    }

    // Check Admin Table
    let admin = await prisma.adminUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (admin && admin.password === password) {
      if (!admin.deviceIdentifier) {
        // First time login - register device
        await prisma.adminUser.update({
          where: { id: admin.id },
          data: { deviceIdentifier: deviceId }
        });
      } else if (admin.deviceIdentifier !== deviceId) {
        // Device mismatch
        if (verificationCode && admin.deviceVerificationCode === verificationCode) {
          // Correct code provided, update device
          await prisma.adminUser.update({
            where: { id: admin.id },
            data: { deviceIdentifier: deviceId, deviceVerificationCode: null }
          });
        } else {
          return NextResponse.json({ error: 'device_verification_required', message: 'This device is not recognized. Please enter the verification code from the Super Admin.' }, { status: 403 });
        }
      }
      return NextResponse.json({ id: admin.id, name: admin.name, role: admin.role, branch: admin.branch });
    }

    // Check Faculty Table
    let faculty = await prisma.facultyUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (faculty && faculty.password === password) {
      if (!faculty.deviceIdentifier) {
        // First time login - register device
        await prisma.facultyUser.update({
          where: { id: faculty.id },
          data: { deviceIdentifier: deviceId }
        });
      } else if (faculty.deviceIdentifier !== deviceId) {
        // Device mismatch
        if (verificationCode && faculty.deviceVerificationCode === verificationCode) {
          // Correct code provided, update device
          await prisma.facultyUser.update({
            where: { id: faculty.id },
            data: { deviceIdentifier: deviceId, deviceVerificationCode: null }
          });
        } else {
          return NextResponse.json({ error: 'device_verification_required', message: 'This device is not recognized. Please enter the verification code from the Super Admin.' }, { status: 403 });
        }
      }
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
