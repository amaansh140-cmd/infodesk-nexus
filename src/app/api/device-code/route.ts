import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { userId, role } = data;

    if (!userId || !role) {
      return NextResponse.json({ error: 'Missing userId or role' }, { status: 400 });
    }

    // Generate a random 6-digit code
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (role === 'Super Admin' || role === 'Sub Admin') {
      await prisma.adminUser.update({
        where: { id: userId },
        data: { deviceVerificationCode: newCode }
      });
    } else if (role === 'Faculty') {
      await prisma.facultyUser.update({
        where: { id: userId },
        data: { deviceVerificationCode: newCode }
      });
    } else {
      return NextResponse.json({ error: 'Invalid role for device code generation' }, { status: 400 });
    }

    return NextResponse.json({ success: true, code: newCode });
  } catch (error) {
    console.error('Error generating device code:', error);
    return NextResponse.json({ error: 'Failed to generate device code' }, { status: 500 });
  }
}
