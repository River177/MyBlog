import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Year from './components/Year';

export const metadata: Metadata = {
  title: '我的博客',
  description: '使用Next.js构建的个人博客',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">我的博客</h1>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">首页</a></li>
                <li><a href="/blog" className="hover:underline">博客</a></li>
                <li><a href="/about" className="hover:underline">关于</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto">
            <p>© <Year /> 我的博客. 保留所有权利.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 