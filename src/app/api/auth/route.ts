import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

export const dynamic = "force-dynamic";

async function createSession(userPayload: any) {
  const token = await signToken(userPayload);
  const cookieStore = await cookies();
  cookieStore.set('nexus_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 // 24 hours
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { identifier, password, deviceId, verificationCode } = data;

    // Super Admin Hardcoded (bypasses device verification)
    if (identifier === 'Superadmin' && password === 'Admin@Super@Info') {
      const userPayload = { id: 'SA-1', name: 'Superadmin', role: 'superadmin' };
      await createSession(userPayload);
      return NextResponse.json(userPayload);
    }

    // Check Admin Table
    let admin = await prisma.adminUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (admin && await bcrypt.compare(password, admin.password)) {
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
      const userPayload = { id: admin.id, name: admin.name, role: admin.role, branch: admin.branch };
      await createSession(userPayload);
      return NextResponse.json(userPayload);
    }

    // Check Faculty Table
    let faculty = await prisma.facultyUser.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }]
      }
    });

    if (faculty && await bcrypt.compare(password, faculty.password)) {
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
      const userPayload = { id: faculty.id, name: faculty.name, role: 'faculty' };
      await createSession(userPayload);
      return NextResponse.json(userPayload);
    }

    // Check Student Table
    const student = await prisma.student.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }, { rollNo: identifier }]
      }
    });

    if (student && await bcrypt.compare(password, student.password)) {
      const userPayload = { id: student.id, name: student.name, role: 'student', branch: student.branch };
      await createSession(userPayload);
      return NextResponse.json(userPayload);
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
