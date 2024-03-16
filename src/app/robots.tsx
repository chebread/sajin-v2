export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://sajin.page/sitemap.xml',
    host: 'https://sajin.page',
  };
}
