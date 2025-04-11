/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // 忽略构建时的类型错误
    ignoreBuildErrors: true,
  },
  experimental: {
    // 启用服务器组件
    serverComponents: true,
  },
};

module.exports = nextConfig; 