import { NextResponse } from 'next/server';

export async function GET() {
  const dbUrl = process.env.DATABASE_URL || 'NOT_SET';
  const scrubbedUrl = dbUrl.replace(/:[^:]*@/, ':***@');
  return NextResponse.json({ dbUrl: scrubbedUrl });
}
