import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const faculties = await prisma.facultyUser.findMany({
      orderBy: { createdAt: 'desc' }
    });
    // Remove sensitive data
    const safeFaculties = faculties.map(f => {
      const { password, deviceVerificationCode, ...rest } = f;
      return rest;
    });
    return NextResponse.json(safeFaculties);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch faculties' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const faculty = await prisma.facultyUser.create({
      data: {
        name: data.name,
        email: data.email,
        username: data.username,
        password: hashedPassword,
        phone: data.phone,
        department: data.department,
        status: data.status,
        assignedCourses: data.assignedCourses || [],
        assignedBranches: data.assignedBranches || [],
      }
    });
    const { password, ...safeFaculty } = faculty;
    return NextResponse.json(safeFaculty);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create faculty' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Faculty ID is required' }, { status: 400 });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedFaculty = await prisma.facultyUser.update({
      where: { id },
      data: updateData
    });
    
    const { password, ...safeFaculty } = updatedFaculty;
    return NextResponse.json(safeFaculty);
  } catch (error) {
    console.error('Error updating faculty:', error);
    return NextResponse.json({ error: 'Failed to update faculty' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Faculty ID is required' }, { status: 400 });
    }

    await prisma.facultyUser.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    return NextResponse.json({ error: 'Failed to delete faculty' }, { status: 500 });
  }
}
