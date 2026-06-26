import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: { createdAt: 'desc' }
    });
    // Remove sensitive data
    const safeStudents = students.map(s => {
      const { password, ...rest } = s;
      return rest;
    });
    return NextResponse.json(safeStudents);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const student = await prisma.student.create({
      data: {
        rollNo: data.rollNo,
        name: data.name,
        email: data.email,
        username: data.username,
        password: hashedPassword,
        batch: data.batch,
        branch: data.branch,
        status: data.status,
      }
    });
    const { password, ...safeStudent } = student;
    return NextResponse.json(safeStudent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Student ID is required' }, { status: 400 });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedStudent = await prisma.student.update({
      where: { id },
      data: updateData
    });
    
    const { password, ...safeStudent } = updatedStudent;
    return NextResponse.json(safeStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    return NextResponse.json({ error: 'Failed to update student' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Student ID is required' }, { status: 400 });
    }

    await prisma.student.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting student:', error);
    return NextResponse.json({ error: 'Failed to delete student' }, { status: 500 });
  }
}
