'use client';

import React from 'react';
import BlogCard from '../components/BlogCard';
import { getAllPosts } from '../lib/blog-posts';

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">博客文章</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
} 