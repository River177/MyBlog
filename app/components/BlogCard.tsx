'use client';

import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({ title, date, excerpt, slug }: BlogCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${slug}`} className="hover:text-blue-600">
          {title}
        </Link>
      </h3>
      <p className="text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700 mb-3">{excerpt}</p>
      <Link 
        href={`/blog/${slug}`} 
        className="text-blue-600 hover:underline inline-block"
      >
        阅读全文 &rarr;
      </Link>
    </div>
  );
} 