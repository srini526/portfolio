import { loadEnv } from 'vite'
import { writeFileSync } from 'node:fs'
const url = (process.env.VITE_SITE_URL || loadEnv('production', process.cwd(), 'VITE_').VITE_SITE_URL || 'https://example.com').replace(/\/$/, '')
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`)
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`)
console.log('SEO files written for', url)
