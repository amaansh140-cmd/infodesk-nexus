'use client';

import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { DatabaseProvider } from '../context/DatabaseContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DatabaseProvider>
        {children}
      </DatabaseProvider>
    </AuthProvider>
  );
}
