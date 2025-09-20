import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface Post {
	slug: string;
	updated_at: string;
}

export const GET: RequestHandler = async () => {
	const posts: Post[] = [
		{
			slug: 'artikel-pertama-himti',
			updated_at: '2025-09-20T10:00:00Z'
		},
		{
			slug: 'workshop-web-development',
			updated_at: '2025-09-18T14:30:00Z'
		}
	];

	return json(posts);
};