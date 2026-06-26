import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const admins = await prisma.adminUser.findMany({
      orderBy: { createdAt: 'desc' }
    });
    // Remove sensitive data
    const safeAdmins = admins.map(a => {
      const { password, deviceVerificationCode, ...rest } = a;
      return rest;
    });
    return NextResponse.json(safeAdmins);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch admin users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newAdmin = await prisma.adminUser.create({
      data: {
        name: body.name,
        email: body.email,
        username: body.username,
        password: hashedPassword,
        role: body.role,
        branch: body.branch
      }
    });
    const { password, ...safeAdmin } = newAdmin;
    return NextResponse.json(safeAdmin, { status: 201 });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Admin ID is required' }, { status: 400 });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedAdmin = await prisma.adminUser.update({
      where: { id },
      data: updateData
    });
    
    const { password, ...safeAdmin } = updatedAdmin;
    return NextResponse.json(safeAdmin);
  } catch (error) {
    console.error('Error updating admin:', error);
    return NextResponse.json({ error: 'Failed to update admin' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Admin ID is required' }, { status: 400 });
    }

    await prisma.adminUser.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting admin:', error);
    return NextResponse.json({ error: 'Failed to delete admin' }, { status: 500 });
  }
}
