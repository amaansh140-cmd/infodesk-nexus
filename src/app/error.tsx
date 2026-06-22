'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Caught by error.tsx:', error);
  }, [error]);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', zIndex: 99999, position: 'relative', background: 'white', minHeight: '100vh' }}>
      <h2 style={{ color: 'red' }}>A client-side exception occurred!</h2>
      <p style={{ color: 'red' }}>
        <strong>Error Message:</strong> {error.message}
      </p>
      <details style={{ background: '#f5f5f5', padding: '10px', marginTop: '20px' }}>
        <summary>Stack Trace</summary>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{error.stack}</pre>
      </details>
      <button 
        onClick={() => reset()}
        style={{ marginTop: '20px', padding: '10px 20px', background: '#333', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  );
}
