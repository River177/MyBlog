// 定义博客文章类型
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  content?: string;
}

// 模拟博客文章数据
const posts: BlogPost[] = [
  {
    id: 1,
    title: '开始使用Next.js',
    date: '2023年4月1日',
    excerpt: 'Next.js是一个流行的React框架，它使构建现代web应用变得简单。',
    slug: 'getting-started-with-nextjs',
    content: `
      # 开始使用Next.js

      Next.js是一个流行的React框架，它使构建现代web应用变得简单。

      ## 为什么选择Next.js?

      Next.js提供了许多开箱即用的功能，例如：

      - 服务器端渲染和静态站点生成
      - 自动代码分割
      - 优化的性能
      - 内置CSS和Sass支持
      - 开发环境支持Fast Refresh
      - API路由创建后端API端点

      ## 安装和设置

      要开始使用Next.js，您可以运行以下命令：

      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`

      这将创建一个新的Next.js应用程序并启动开发服务器。

      ## 创建页面

      在Next.js中，每个页面都是从\`pages\`目录中的一个组件导出的。

      例如，要创建一个关于页面，您可以创建一个名为\`pages/about.js\`的文件，并添加以下内容：

      \`\`\`jsx
      export default function About() {
        return <h1>关于我们</h1>;
      }
      \`\`\`

      ## 结论

      Next.js是构建现代React应用程序的绝佳选择。它提供了许多功能，使开发过程更加高效和愉快。
    `,
  },
  {
    id: 2,
    title: 'React基础知识',
    date: '2023年4月5日',
    excerpt: '学习React的核心概念：组件、props和state。',
    slug: 'react-fundamentals',
    content: `
      # React基础知识

      学习React的核心概念：组件、props和state。

      ## 组件

      React应用是由组件构建的。组件是可重用的UI片段。

      ## Props

      Props是传递给组件的参数。它们是不可变的。

      ## State

      State是组件内部的数据，它可以随时间变化。
    `,
  },
  {
    id: 3,
    title: 'CSS-in-JS解决方案',
    date: '2023年4月10日',
    excerpt: '探索在React应用中使用CSS的各种方法。',
    slug: 'css-in-js-solutions',
  },
  {
    id: 4,
    title: '使用Tailwind CSS构建响应式界面',
    date: '2023年4月15日',
    excerpt: 'Tailwind CSS是一个实用优先的CSS框架，可以快速构建现代网站。',
    slug: 'building-responsive-ui-with-tailwind',
  },
  {
    id: 5,
    title: '服务器组件与客户端组件',
    date: '2023年4月20日',
    excerpt: '了解Next.js中的服务器组件和客户端组件之间的区别。',
    slug: 'server-vs-client-components',
  },
];

// 获取最近的博客文章
export function getRecentPosts(count: number): BlogPost[] {
  return posts.slice(0, count);
}

// 获取所有博客文章
export function getAllPosts(): BlogPost[] {
  return posts;
}

// 根据slug获取单个博客文章
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}