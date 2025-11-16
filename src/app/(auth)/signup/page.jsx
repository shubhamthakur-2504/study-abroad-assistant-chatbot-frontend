'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join Study Abroad Assistant today</p>
        </div>

        <SignupForm />

        <div className="mt-6 text-center">
          <Link href="/login" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Already have an account? Log in
          </Link>
        </div>
      </Card>
    </div>
  );
}