'use client';

import React from 'react';
import Link from 'next/link';
import { getRecentPosts } from './lib/blog-posts';
import BlogCard from './components/BlogCard';

export default function Home() {
  const recentPosts = getRecentPosts(4);
  
  return (
    <div className="max-w-4xl mx-auto">
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">欢迎来到我的博客</h2>
        <p className="text-gray-600 mb-4">
          这是一个使用Next.js和React构建的简单博客网站。
          在这里，我将分享我的想法、经验和知识。
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          浏览博客文章
        </Link>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">最新文章</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {recentPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 