import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Server-side fetch bypasses browser CORS effectively
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'LLM endpoint rejected the request. Please try a simpler prompt.' },
        { status: response.status }
      );
    }
    
    const text = await response.text();
    return new NextResponse(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Nexus Backend Proxy Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error connecting to AI engine.' },
      { status: 500 }
    );
  }
}
