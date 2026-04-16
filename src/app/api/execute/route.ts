import { NextResponse } from 'next/server';

const COMPILER_MAP: Record<string, string> = {
  python: 'cpython-head',
  cpp: 'gcc-13.2.0',
  java: 'openjdk-jdk-22+36',
  rust: 'rust-1.81.0',
  go: 'go-1.23.2',
  typescript: 'typescript-5.6.2',
  ruby: 'ruby-3.3.11',
  php: 'php-8.3.12',
  csharp: 'dotnetcore-8.0.402',
  swift: 'swift-6.0.1',
};

export async function POST(req: Request) {
  try {
    const { language, code } = await req.json();

    if (!language || !code) {
      return NextResponse.json(
        { error: 'Missing language or code payload' },
        { status: 400 }
      );
    }

    const compiler = COMPILER_MAP[language];
    
    if (!compiler) {
      return NextResponse.json(
        { error: `Language '${language}' is not officially supported by the cloud engine yet.` },
        { status: 400 }
      );
    }

    const response = await fetch('https://wandbox.org/api/compile.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        compiler: compiler,
        code: code,
        save: false
      }),
    });

    if (!response.ok) {
      throw new Error(`Wandbox API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      stdout: data.program_message || '',
      stderr: data.program_error || data.compiler_error || '',
      exitCode: data.status,
    });
    
  } catch (error: any) {
    console.error('Execution Engine Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal execution server error' },
      { status: 500 }
    );
  }
}
