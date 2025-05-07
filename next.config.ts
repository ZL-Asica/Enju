import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Themed-By',
            value: 'Enju Folio',
          },
          {
            key: 'X-Theme-Author',
            value: 'ZL Asica',
          },
          {
            key: 'X-Theme-URL',
            value: 'https://github.com/ZL-Asica/EnjuFolio/',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/teaching',
        destination: '/cv',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/LifeTune',
        destination: '/projects/life-tune',
        permanent: true,
      },
      {
        source: '/projects/SuzuBlog',
        destination: '/projects/suzu-blog',
        permanent: true,
      },
      {
        source: '/projects/BelugaSubs',
        destination: '/projects/beluga-subs',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, remarkGemoji, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

export default withMDX(nextConfig)
