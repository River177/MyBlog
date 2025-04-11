import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../lib/blog-posts';
import { Metadata } from 'next';

// 预生成静态路径
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '抱歉，您请求的博客文章不存在。',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// 页面组件
export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post || !post.content) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-red-600 mb-4">文章未找到</h1>
        <p className="mb-4">抱歉，您请求的博客文章不存在。</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          返回博客首页
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; 返回博客列表
      </Link>
      
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        
        <div className="mt-8">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold my-4">{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold my-3">{line.substring(3)}</h2>;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="ml-6 my-1">{line.substring(2)}</li>;
            } else if (line.trim().startsWith('```')) {
              return null;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index} className="my-2">{line}</p>;
            }
          })}
        </div>
      </article>
    </div>
  );
}