import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const updatedBranch = await prisma.branch.update({
      where: { id },
      data: {
        name: body.name,
        admin: body.admin,
        status: body.status
      }
    });
    
    return NextResponse.json(updatedBranch, { status: 200 });
  } catch (error) {
    console.error('Error updating branch:', error);
    return NextResponse.json({ error: 'Failed to update branch' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    await prisma.branch.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting branch:', error);
    return NextResponse.json({ error: 'Failed to delete branch' }, { status: 500 });
  }
}
