import type { RequestHandler } from './$types';

interface Post {
	slug: string;
	updated_at: string; 
}

const site: string = 'https://www.himtiunpab.com';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();

	const staticPages: string[] = [
        '/', 
        '/tentang', 
        '/kegiatan', 
        '/kontak'
    ];

	const body = render(staticPages, posts);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return new Response(body, { headers });
};

const render = (staticPages: string[], posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
>
  ${staticPages
		.map(
			(page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  `
		)
		.join('')}

  ${posts
		.map(
			(post) => `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date(post.updated_at).toISOString()}</lastmod>
    <priority>0.6</priority>
  </url>
  `
		)
		.join('')}
</urlset>
`;