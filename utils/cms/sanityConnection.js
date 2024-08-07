import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2022-03-07', // use the latest API version you are comfortable with
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});
