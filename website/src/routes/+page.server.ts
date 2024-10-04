import {redirect} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageServerLoad = async () => {
	redirect(307, '/icons');
};
