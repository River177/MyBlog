'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">关于我的博客</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">关于我</h2>
        <p className="text-gray-700 mb-4">
          你好！我是一名热爱技术和写作的开发者。我创建这个博客是为了分享我在编程、技术和个人发展方面的经验和想法。
        </p>
        <p className="text-gray-700 mb-4">
          我主要专注于Web开发、React和JavaScript相关技术。在这个博客上，你可以找到关于这些主题的教程、指南和个人见解。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
        <p className="text-gray-700 mb-4">
          如果你有任何问题或想法想要分享，欢迎通过以下方式联系我：
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>电子邮件：example@myblog.com</li>
          <li>GitHub：<a href="https://github.com/yourusername" className="text-blue-600 hover:underline">github.com/yourusername</a></li>
          <li>Twitter：<a href="https://twitter.com/yourusername" className="text-blue-600 hover:underline">@yourusername</a></li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">技术栈</h2>
        <p className="text-gray-700 mb-4">
          这个博客使用以下技术构建：
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Next.js - React框架</li>
          <li>React - 前端库</li>
          <li>TypeScript - 类型安全的JavaScript</li>
          <li>Tailwind CSS - 实用优先的CSS框架</li>
        </ul>
      </section>
    </div>
  );
} 