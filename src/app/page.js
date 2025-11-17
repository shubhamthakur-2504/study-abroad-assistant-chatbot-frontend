'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { healthApi } from '@/lib/api';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

   useEffect(() => {
    // Wake up the backend (fire and forget)
    healthApi.check()
      .then(() => console.log('Backend is healthy'))
      .catch(err => console.error('Backend health check failed:', err));
    
    // Route based on auth status
    if (!loading) {
      if (isAuthenticated) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [isAuthenticated, loading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}