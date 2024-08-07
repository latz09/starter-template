import { fetchContent } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_DATA as query } from '@/data/queries/pages/FETCH_HOME_PAGE_DATA';
import PageContainer from './components/utils/animations/PageContainer';
import AnimateUp from './components/utils/animations/AnimateUp';

import SubmitContactForm from './components/contact/SubmitContactForm';

export default async function Home() {
	const [data] = await fetchContent(query);
	// console.log(data);

	return (
		<PageContainer>
			<div className='my-12 grid lg:grid-cols-3 place-items-center lg:place-items-start gap-8 lg:gap-0 max-w-[92rem] mx-auto   '>
				<div className='lg:col-span-2 '>
					<div className='grid place-items-centr gap-4 textcent	'>
						<h1 className='text-4xl text-primary font-bold'>{`Let's Get Started`}</h1>
						<h1 className='text-2xl text-dark font-bold'>{`Simple Design`}</h1>
						<AnimateUp className='mt-2 font-semibold space-y-4 '>
							<li>Create new CMS project</li>
							<li>Update Credentials in .env.local</li>
							<li>Update Color Scheme in tailwind.config.js</li>
							<li>Update Navigation Links in data/navigationLinks.js</li>
							<li>Choose fonts and update metadata templates in layout.js</li>
							<li>Update logo in /public/images/business-name</li>
							<li>Update Privacy Policy</li>
							<li>Test contact form</li>
						</AnimateUp>
					</div>
				</div>
				<div className='grid place-items-center'>
					<SubmitContactForm />
				</div>
			</div>
		</PageContainer>
	);
}

// Animations,
