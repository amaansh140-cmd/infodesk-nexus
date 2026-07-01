import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken, signToken } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('nexus_session')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await verifyToken(token);
    if (!payload || payload.role !== 'superadmin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { targetId, targetRole } = await request.json();

    let userPayload: any = null;

    if (targetRole === 'Student') {
      const user = await prisma.student.findUnique({ where: { id: targetId } });
      if (user) userPayload = { id: user.id, name: user.name, role: 'student', branch: user.branch };
    } else if (targetRole === 'Faculty') {
      const user = await prisma.facultyUser.findUnique({ where: { id: targetId } });
      if (user) userPayload = { id: user.id, name: user.name, role: 'faculty' };
    } else if (targetRole === 'Sub Admin') {
      const user = await prisma.adminUser.findUnique({ where: { id: targetId } });
      if (user) userPayload = { id: user.id, name: user.name, role: 'subadmin', branch: user.branch };
    }

    if (!userPayload) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const newToken = await signToken(userPayload);
    cookieStore.set('nexus_session', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24
    });

    return NextResponse.json(userPayload);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to impersonate' }, { status: 500 });
  }
}
