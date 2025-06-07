import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <SectionTitle>Contact Us</SectionTitle>
      <p className="text-gray-300 mt-4">
        Get in touch with our team for any inquiries or support.
      </p>
      {/* Contact form will be added here */}
    </main>
  );
}