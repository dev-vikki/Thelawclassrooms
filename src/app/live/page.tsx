import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function LivePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionTitle>Live Sessions</SectionTitle>
      <p className="text-gray-300 mt-4">
        Join our live lectures and interactive sessions with legal experts.
      </p>
      {/* Live content will be added here */}
    </main>
  );
}